import { Bell } from 'lucide-react';

const Meetings = () => {
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
            />
            <MeetingCard
              title="Project Review"
              time="2:00 PM - 3:00 PM"
              description="Monthly project progress review with stakeholders"
              meetingId="MEET-002"
              status="in-3-hours"
              attendees={5}
            />
          </div>
        </div>

        {/* Upcoming Meetings */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Upcoming Meetings</h2>
          <div className="space-y-6">
            <UpcomingMeeting 
              title="Team Training"
              time="Tomorrow, 11:00 AM"
            />
            <UpcomingMeeting 
              title="Client Call"
              time="Feb 23, 2:30 PM"
            />
            <UpcomingMeeting 
              title="Sprint Planning"
              time="Feb 24, 10:00 AM"
            />
          </div>
        </div>
      </div>
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

const MeetingCard = ({ title, time, description, meetingId, status, attendees }) => (
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
    <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
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