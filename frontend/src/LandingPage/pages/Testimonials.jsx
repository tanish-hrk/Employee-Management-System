export default function Testimonials() {
    return (
      <section id="testimonials" className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 animate__animated animate__fadeIn">
              Trusted by Leading Companies
            </h2>
            <p className="mt-4 text-xl text-neutral-600 animate__animated animate__fadeIn animate__delay-1s">
              See what our customers have to say about Emasy
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-white">T</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-neutral-900">TechCorp Inc.</h4>
                  <p className="text-neutral-600">Sarah Johnson, HR Director</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-neutral-600">
                "Emasy has transformed how we manage our workforce. The performance tracking and attendance management
                features are exceptional."
              </p>
            </div>
  
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp animate__delay-1s">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-white">G</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-neutral-900">Global Solutions</h4>
                  <p className="text-neutral-600">Mike Chen, CEO</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-neutral-600">
                "The salary management and live meeting features have made remote work seamless. Best investment for our
                HR department."
              </p>
            </div>
  
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp animate__delay-2s">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-white">I</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-neutral-900">Innovate Labs</h4>
                  <p className="text-neutral-600">Emma Davis, Operations Head</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-neutral-600">
                "The employee leaderboard has significantly boosted team motivation. Emasy is a game-changer for modern
                businesses."
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  