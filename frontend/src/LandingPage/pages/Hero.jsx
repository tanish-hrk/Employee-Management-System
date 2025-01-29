// import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="bg-neutral-900 min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl animate__animated animate__fadeIn">
            <span className="block">Modernize Your</span>
            <span className="block text-indigo-500">Employee Management</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl animate__animated animate__fadeIn animate__delay-1s">
            Streamline HR operations, boost productivity, and enhance employee engagement with our comprehensive
            management solution.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 animate__animated animate__fadeIn animate__delay-2s">
            <div className="rounded-md shadow">
              <a
                href="#authentication"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Get Started
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#features"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

