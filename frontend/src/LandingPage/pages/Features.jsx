import { Check, Video, TrendingUp, Calendar, DollarSign, Trophy } from "lucide-react"

const features = [
  {
    name: "Live Meetings",
    description: "Schedule and conduct virtual meetings with your team seamlessly.",
    icon: Video,
  },
  {
    name: "Performance Tracking",
    description: "Monitor and analyze employee performance with real-time metrics.",
    icon: TrendingUp,
  },
  {
    name: "Task Management",
    description: "Assign and track tasks in real-time with detailed progress reports.",
    icon: Check,
  },
  {
    name: "Attendance Tracking",
    description: "Automated attendance management with detailed reporting.",
    icon: Calendar,
  },
  {
    name: "Salary Management",
    description: "Streamlined payroll processing and salary management system.",
    icon: DollarSign,
  },
  {
    name: "Employee Leaderboard",
    description: "Gamified performance tracking with real-time rankings.",
    icon: Trophy,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 animate__animated animate__fadeIn">
            Powerful Features for Modern Workplaces
          </h2>
          <p className="mt-4 text-xl text-neutral-600 animate__animated animate__fadeIn animate__delay-1s">
            Everything you need to manage your workforce efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">{feature.name}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

