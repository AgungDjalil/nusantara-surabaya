import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import About from "./components/About"
import Location from "./components/Location"
import Reservation from "./components/Reservation"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <Location />
        <Reservation />
      </main>
      <Footer />
    </div>
  )
}

export default App
