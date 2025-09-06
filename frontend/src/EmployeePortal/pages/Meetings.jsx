import { Bell } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useSocket } from '../context/SocketContext';

const Meetings = () => {
  const { socket, joinMeeting, leaveMeeting, sendMessage } = useSocket();
  const [currentMeeting, setCurrentMeeting] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isInMeeting, setIsInMeeting] = useState(false);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnectionRef = useRef(null);

  useEffect(() => {
    if (socket) {
      socket.on('user-joined', (data) => {
        console.log('User joined:', data.userId);
        // Handle user joined
      });

      socket.on('user-left', (data) => {
        console.log('User left:', data.userId);
        // Handle user left
      });

      socket.on('receive-message', (data) => {
        setMessages(prev => [...prev, data]);
      });

      socket.on('offer', async (data) => {
        if (peerConnectionRef.current) {
          await peerConnectionRef.current.setRemoteDescription(new RTCSessionDescription(data.offer));
          const answer = await peerConnectionRef.current.createAnswer();
          await peerConnectionRef.current.setLocalDescription(answer);
          socket.emit('answer', { room: currentMeeting, answer });
        }
      });

      socket.on('answer', async (data) => {
        if (peerConnectionRef.current) {
          await peerConnectionRef.current.setRemoteDescription(new RTCSessionDescription(data.answer));
        }
      });

      socket.on('ice-candidate', async (data) => {
        if (peerConnectionRef.current) {
          await peerConnectionRef.current.addIceCandidate(new RTCIceCandidate(data.candidate));
        }
      });
    }

    return () => {
      if (socket) {
        socket.off('user-joined');
        socket.off('user-left');
        socket.off('receive-message');
        socket.off('offer');
        socket.off('answer');
        socket.off('ice-candidate');
      }
    };
  }, [socket, currentMeeting]);

  const startMeeting = async (meetingId) => {
    setCurrentMeeting(meetingId);
    setIsInMeeting(true);
    joinMeeting(meetingId);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }

      peerConnectionRef.current = new RTCPeerConnection({
        iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
      });

      stream.getTracks().forEach(track => {
        peerConnectionRef.current.addTrack(track, stream);
      });

      peerConnectionRef.current.onicecandidate = (event) => {
        if (event.candidate) {
          socket.emit('ice-candidate', { room: meetingId, candidate: event.candidate });
        }
      };

      peerConnectionRef.current.ontrack = (event) => {
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = event.streams[0];
        }
      };

      const offer = await peerConnectionRef.current.createOffer();
      await peerConnectionRef.current.setLocalDescription(offer);
      socket.emit('offer', { room: meetingId, offer });

    } catch (error) {
      console.error('Error starting meeting:', error);
    }
  };

  const endMeeting = () => {
    if (peerConnectionRef.current) {
      peerConnectionRef.current.close();
      peerConnectionRef.current = null;
    }
    
    if (localVideoRef.current && localVideoRef.current.srcObject) {
      localVideoRef.current.srcObject.getTracks().forEach(track => track.stop());
    }

    leaveMeeting(currentMeeting);
    setCurrentMeeting(null);
    setIsInMeeting(false);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() && currentMeeting) {
      sendMessage(currentMeeting, newMessage);
      setMessages(prev => [...prev, { message: newMessage, from: 'me', timestamp: new Date() }]);
      setNewMessage('');
    }
  };
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Your Meetings</h1>
        <div className="flex gap-4 items-center">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <Bell className="w-6 h-6" />
          </button>
          <div className="w-10 h-10 bg-orange-500 rounded-full"></div>
        </div>
      </div>

      {isInMeeting ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Video Section */}
          <div className="lg:col-span-2 bg-black rounded-lg p-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <video ref={localVideoRef} autoPlay muted className="w-full h-48 object-cover" />
                <p className="text-white text-center py-2">You</p>
              </div>
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <video ref={remoteVideoRef} autoPlay className="w-full h-48 object-cover" />
                <p className="text-white text-center py-2">Remote User</p>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <button 
                onClick={endMeeting}
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                End Meeting
              </button>
            </div>
          </div>

          {/* Chat Section */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Meeting Chat</h3>
            <div className="h-64 overflow-y-auto mb-4 border rounded p-2">
              {messages.map((msg, index) => (
                <div key={index} className="mb-2">
                  <span className="text-sm text-gray-600">{msg.from}: </span>
                  <span>{msg.message}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 border rounded"
              />
              <button 
                onClick={handleSendMessage}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <StatCard 
              title="Today's Meetings" 
              value="3" 
              subtitle="2 Hours Total Duration" 
            />
            <StatCard 
              title="Upcoming Week" 
              value="8" 
              subtitle="5 Hours Total Duration" 
            />
            <StatCard 
              title="This Month" 
              value="24" 
              subtitle="18 Hours Total Duration" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Today's Schedule */}
            <div className="md:col-span-2 bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Today&#39;s Schedule</h2>
              <div className="space-y-8">
                <MeetingCard
                  title="Team Daily Standup"
                  time="10:00 AM - 10:30 AM"
                  description="Daily progress update and roadblock discussion"
                  meetingId="MEET-001"
                  status="upcoming"
                  attendees={7}
                  onJoin={() => startMeeting('MEET-001')}
                />
                <MeetingCard
                  title="Project Review"
                  time="2:00 PM - 3:00 PM"
                  description="Weekly project status and milestone review"
                  meetingId="MEET-002"
                  status="upcoming"
                  attendees={5}
                  onJoin={() => startMeeting('MEET-002')}
                />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-4">
                <button className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Schedule New Meeting
                </button>
                <button className="w-full p-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  Join Instant Meeting
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const StatCard = ({ title, value, subtitle }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <h3 className="text-gray-600 font-medium">{title}</h3>
    <p className="text-3xl font-semibold text-gray-900 mt-2">{value}</p>
    <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
  </div>
);

const MeetingCard = ({ title, time, description, meetingId, status, attendees, onJoin }) => (
  <div className="flex justify-between items-start">
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <h3 className="font-medium">{title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm ${
          status === 'upcoming' 
            ? 'bg-green-100 text-green-800'
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {status === 'upcoming' ? 'Upcoming' : 'In 3 Hours'}
        </span>
      </div>
      <p className="text-gray-600">{time}</p>
      <p className="text-gray-500 text-sm">{description}</p>
      <p className="text-gray-500 text-sm">Meeting ID: {meetingId}</p>
      <div className="flex items-center gap-2">
        <div className="flex -space-x-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-orange-500 border-2 border-white" />
          ))}
          {attendees > 3 && (
            <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-sm text-gray-600">
              +{attendees - 3}
            </div>
          )}
        </div>
      </div>
    </div>
    <button 
      onClick={onJoin}
      className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
    >
      Join Meeting
    </button>
  </div>
);

const UpcomingMeeting = ({ title, time }) => (
  <div>
    <h3 className="font-medium">{title}</h3>
    <p className="text-gray-500 text-sm">{time}</p>
  </div>
);

export default Meetings;