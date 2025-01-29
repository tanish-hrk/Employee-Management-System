export default function Pricing() {
    return (
      <section id="pricing" className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white animate__animated animate__fadeIn">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-xl text-gray-300 animate__animated animate__fadeIn animate__delay-1s">
              Choose the perfect plan for your business
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-neutral-800 rounded-2xl overflow-hidden animate__animated animate__fadeInLeft">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold text-white">$29</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Up to 10 employees
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Basic attendance tracking
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Task management
                  </li>
                </ul>
                <button className="w-full bg-indigo-600 text-white rounded-lg px-6 py-3 hover:bg-indigo-700 transition-colors duration-300">
                  Get Started
                </button>
              </div>
            </div>
  
            {/* Professional Plan */}
            <div className="bg-indigo-600 rounded-2xl overflow-hidden transform scale-105 animate__animated animate__fadeInUp">
              <div className="p-8">
                <div className="inline-block px-4 py-1 rounded-full bg-indigo-700 text-white text-sm mb-4">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold text-white">$79</span>
                  <span className="text-indigo-200 ml-2">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-white">
                    <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Up to 50 employees
                  </li>
                  <li className="flex items-center text-white">
                    <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Advanced performance tracking
                  </li>
                  <li className="flex items-center text-white">
                    <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Live meetings
                  </li>
                  <li className="flex items-center text-white">
                    <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Salary management
                  </li>
                </ul>
                <button className="w-full bg-white text-indigo-600 rounded-lg px-6 py-3 hover:bg-indigo-50 transition-colors duration-300">
                  Get Started
                </button>
              </div>
            </div>
  
            {/* Enterprise Plan */}
            <div className="bg-neutral-800 rounded-2xl overflow-hidden animate__animated animate__fadeInRight">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold text-white">$199</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Unlimited employees
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Custom reporting
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    API access
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    24/7 support
                  </li>
                </ul>
                <button className="w-full bg-indigo-600 text-white rounded-lg px-6 py-3 hover:bg-indigo-700 transition-colors duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  