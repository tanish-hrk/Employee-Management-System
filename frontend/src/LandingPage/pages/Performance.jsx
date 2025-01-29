export default function Performance() {
    return (
      <section id="performance" className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 animate__animated animate__fadeIn">
              Performance Management & Analytics
            </h2>
            <p className="mt-4 text-xl text-neutral-600 animate__animated animate__fadeIn animate__delay-1s">
              Track, measure, and improve employee performance with data-driven insights
            </p>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Performance Dashboard Preview */}
            <div className="bg-white p-8 rounded-xl shadow-lg animate__animated animate__fadeInLeft">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Real-time Performance Metrics</h3>
  
                {/* Performance Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                    <div className="text-indigo-600 text-2xl font-bold">87%</div>
                    <div className="text-neutral-600">Average Productivity</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                    <div className="text-green-600 text-2xl font-bold">92%</div>
                    <div className="text-neutral-600">Task Completion</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                    <div className="text-blue-600 text-2xl font-bold">95%</div>
                    <div className="text-neutral-600">Attendance Rate</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                    <div className="text-purple-600 text-2xl font-bold">4.8/5</div>
                    <div className="text-neutral-600">Performance Score</div>
                  </div>
                </div>
              </div>
  
              {/* Performance Chart */}
              <div className="h-64 bg-neutral-50 rounded-lg border border-neutral-200 p-4">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold text-neutral-700">Performance Trend</h4>
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 text-sm bg-indigo-100 text-indigo-600 rounded-full">Daily</span>
                    <span className="px-3 py-1 text-sm bg-neutral-200 text-neutral-600 rounded-full">Weekly</span>
                    <span className="px-3 py-1 text-sm bg-neutral-200 text-neutral-600 rounded-full">Monthly</span>
                  </div>
                </div>
                <div className="h-40 relative">
                  {/* Placeholder for chart */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-indigo-100 to-transparent rounded"></div>
                </div>
              </div>
            </div>
  
            {/* Performance Features */}
            <div className="space-y-8 animate__animated animate__fadeInRight">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-neutral-900">Advanced Analytics</h4>
                  <p className="mt-2 text-neutral-600">
                    Comprehensive performance metrics with customizable KPIs and real-time tracking
                  </p>
                </div>
              </div>
  
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-neutral-900">Performance Insights</h4>
                  <p className="mt-2 text-neutral-600">
                    AI-powered recommendations and insights for improving team productivity
                  </p>
                </div>
              </div>
  
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-neutral-900">Custom Reports</h4>
                  <p className="mt-2 text-neutral-600">
                    Generate detailed performance reports with custom parameters and export options
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  