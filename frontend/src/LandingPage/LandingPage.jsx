import Navbar from "./pages/Navbar"
import Hero from "./pages/Hero"
import Features from "./pages/Features"
import Authentication from "./pages/Authentication"
import Performance from "./pages/Performance"
import Pricing from "./pages/Pricing"
import Testimonials from "./pages/Testimonials"
import Integration from "./pages/Integration"
import Contact from "./pages/Contact"
import Footer from "./pages/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Authentication />
      <Performance />
      <Pricing />
      <Testimonials />
      <Integration />
      <Contact />
      <Footer />
    </div>
  )
}