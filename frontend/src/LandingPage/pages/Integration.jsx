export default function Integration() {
    return (
      <section id="integration" className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white animate__animated animate__fadeIn">Seamless Integrations</h2>
            <p className="mt-4 text-xl text-gray-300 animate__animated animate__fadeIn animate__delay-1s">
              Connect Emasy with your favorite tools
            </p>
          </div>
  
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Integration 1 */}
            <div className="bg-neutral-800 p-6 rounded-xl hover:bg-neutral-700 transition-all duration-300 animate__animated animate__fadeInUp">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Zoom</h3>
                <p className="text-gray-400 text-center text-sm">Video conferencing integration</p>
              </div>
            </div>
  
            {/* Integration 2 */}
            <div className="bg-neutral-800 p-6 rounded-xl hover:bg-neutral-700 transition-all duration-300 animate__animated animate__fadeInUp animate__delay-1s">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">PayPal</h3>
                <p className="text-gray-400 text-center text-sm">Payroll processing</p>
              </div>
            </div>
  
            {/* Integration 3 */}
            <div className="bg-neutral-800 p-6 rounded-xl hover:bg-neutral-700 transition-all duration-300 animate__animated animate__fadeInUp animate__delay-2s">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Google Calendar</h3>
                <p className="text-gray-400 text-center text-sm">Schedule sync</p>
              </div>
            </div>
  
            {/* Integration 4 */}
            <div className="bg-neutral-800 p-6 rounded-xl hover:bg-neutral-700 transition-all duration-300 animate__animated animate__fadeInUp animate__delay-3s">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Slack</h3>
                <p className="text-gray-400 text-center text-sm">Team communication</p>
              </div>
            </div>
          </div>
  
          <div className="mt-16 text-center">
            <p className="text-gray-300 mb-6">Want to integrate with a different platform?</p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 animate__animated animate__fadeIn animate__delay-2s">
              Request Integration
            </button>
          </div>
        </div>
      </section>
    )
  }
  
  