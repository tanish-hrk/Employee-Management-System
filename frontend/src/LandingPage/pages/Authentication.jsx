import { useNavigate } from "react-router-dom";
export default function Authentication() {
  const navigate = useNavigate();
    return (
      <section id="portals" className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white animate__animated animate__fadeIn">Get Started with Emasy</h2>
            <p className="mt-4 text-xl text-gray-300 animate__animated animate__fadeIn animate__delay-1s">
              Choose your role to begin your journey
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Admin Card */}
            <div className="bg-neutral-800 rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInLeft">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-indigo-600 rounded-full mx-auto flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Admin Portal</h3>
                <p className="text-gray-400 mb-6">Manage your organization and employees</p>
  
                <div className="space-y-4">
                  <button className="w-full bg-indigo-600 text-white rounded-lg px-6 py-3 hover:bg-indigo-700 transition-colors duration-300" onClick={() => {navigate('/admin/login')}}>
                    Admin Login
                  </button>
                  <button className="w-full bg-transparent border border-indigo-600 text-indigo-400 rounded-lg px-6 py-3 hover:bg-indigo-600 hover:text-white transition-all duration-300">
                    Register Organization
                  </button>
                </div>
              </div>
            </div>
  
            {/* Employee Card */}
            <div className="bg-neutral-800 rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInRight">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-indigo-600 rounded-full mx-auto flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Employee Portal</h3>
                <p className="text-gray-400 mb-6">Access your work dashboard</p>
  
                <div className="space-y-4">
                  <button className="w-full bg-indigo-600 text-white rounded-lg px-6 py-3 hover:bg-indigo-700 transition-colors duration-300" onClick={() => {navigate('/employee/login')}}>
                    Employee Login
                  </button>
                  <button className="w-full bg-transparent border border-indigo-600 text-indigo-400 rounded-lg px-6 py-3 hover:bg-indigo-600 hover:text-white transition-all duration-300">
                    New Employee Setup
                  </button>
                </div>
              </div>
            </div>
          </div>
  
          {/* Additional Info */}
          <div className="mt-16 text-center animate__animated animate__fadeIn animate__delay-1s">
            <p className="text-gray-400">Need help getting started?</p>
            <button className="mt-4 text-indigo-400 hover:text-indigo-300 flex items-center justify-center mx-auto">
              <span>Watch Demo</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    )
  }
  
  