import React from 'react';

const Meeting = () => {
  const upcomingMeeting = {
    title: "Project Review Meeting",
    time: "Today, 2:00 PM - 3:00 PM",
    meetingId: "123-456-789",
    password: "123456",
    participants: [
      { id: 1, avatar: "🧑" },
      { id: 2, avatar: "🧑" },
      { id: 3, avatar: "🧑" }
    ],
    additionalParticipants: 3
  };

  const meetingStats = {
    today: 5,
    upcoming: 12,
    completed: 28
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-medium text-gray-800">Meeting Scheduler</h1>
        <button 
          className="bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800"
          onClick={() => window.open('...../webrtc.html', '_blank')}
        >
          <span>+</span>
          Schedule Meeting
        </button>
      </div>

      <div className="flex gap-6">
        {/* Left Section - Upcoming Meetings */}
        <div className="bg-white rounded-lg p-6 flex-grow shadow-sm">
          <h2 className="text-xl font-medium text-gray-800 mb-4">Upcoming Meetings</h2>
          
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-gray-800">{upcomingMeeting.title}</h3>
              <div className="space-x-2">
                <button className="text-blue-600 hover:text-blue-800">Join</button>
                <button className="text-gray-600 hover:text-gray-800">Edit</button>
              </div>
            </div>
            
            <p className="text-gray-600 mb-3">{upcomingMeeting.time}</p>
            
            <div className="flex items-center gap-1 mb-3">
              {upcomingMeeting.participants.map(participant => (
                <div 
                  key={participant.id}
                  className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm"
                >
                  {participant.avatar}
                </div>
              ))}
              {upcomingMeeting.additionalParticipants > 0 && (
                <span className="text-gray-600 text-sm">
                  +{upcomingMeeting.additionalParticipants} more
                </span>
              )}
            </div>
            
            <div className="space-y-1">
              <p className="text-gray-600">
                <span className="font-medium">Meeting ID:</span> {upcomingMeeting.meetingId}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Password:</span> {upcomingMeeting.password}
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6 w-80">
          {/* Quick Join */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-medium text-gray-800 mb-4">Quick Join</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Meeting ID</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800">
                Join Meeting
              </button>
            </div>
          </div>

          {/* Meeting Stats */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-medium text-gray-800 mb-4">Meeting Stats</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Today's Meetings</span>
                <span className="font-medium">{meetingStats.today}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Upcoming</span>
                <span className="font-medium">{meetingStats.upcoming}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Completed</span>
                <span className="font-medium">{meetingStats.completed}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meeting;