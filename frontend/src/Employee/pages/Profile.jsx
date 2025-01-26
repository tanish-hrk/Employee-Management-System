import { Bell, PenSquare, Calendar, Brain } from 'lucide-react';

const ProfilePage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">My Profile</h1>
        <div className="flex gap-4 items-center">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <Bell className="w-6 h-6" />
          </button>
          <div className="w-10 h-10 bg-purple-500 rounded-full">
            <img src="/api/placeholder/40/40" alt="Profile" className="w-full h-full rounded-full" />
          </div>
        </div>
      </div>

      {/* Profile Header */}
      <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
        <div className="flex items-start gap-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-purple-100 overflow-hidden">
              <img src="/api/placeholder/96/96" alt="John Doe" className="w-full h-full object-cover" />
            </div>
            <button className="absolute bottom-0 right-0 p-1.5 bg-gray-900 rounded-full text-white">
              <PenSquare className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold mb-1">John Doe</h2>
              <p className="text-gray-600">Senior Developer</p>
              <p className="text-gray-500 text-sm">Employee ID: EMP001</p>
            </div>
            <div className="flex gap-2">
              {['JavaScript', 'React', 'Node.js'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full text-gray-600 text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Information */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
          <div className="space-y-6">
            <InfoField label="Full Name" value="John Doe" />
            <InfoField label="Email" value="john.doe@company.com" />
            <InfoField label="Phone" value="+1 234 567 890" />
            <InfoField 
              label="Date of Birth" 
              value="01-01-1990" 
              icon={<Calendar className="w-5 h-5 text-gray-400" />} 
            />
          </div>
        </div>

        {/* Work Information */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Work Information</h2>
          <div className="space-y-6">
            <InfoField label="Department" value="Information Technology" />
            <InfoField label="Position" value="Senior Developer" />
            <InfoField 
              label="Join Date" 
              value="15-03-2020" 
              icon={<Calendar className="w-5 h-5 text-gray-400" />} 
            />
            <InfoField label="Manager" value="Jane Smith" />
          </div>
        </div>
      </div>
      
      {/* AI Assistant Button */}
      <button className="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white shadow-lg">
        <Brain className="w-6 h-6" />
      </button>
    </div>
  );
};

const InfoField = ({ label, value, icon }) => (
  <div>
    <label className="block text-gray-600 mb-1">{label}</label>
    <div className="flex items-center justify-between">
      <span className="text-gray-800">{value}</span>
      {icon}
    </div>
  </div>
);

export default ProfilePage;