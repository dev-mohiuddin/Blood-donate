
import Header from "../../components/Header"
import Hero from "../../components/Hero"
import Achievements from "../../components/Achievements"
import About from "../../components/About"

function Home() {
  return (
    <div className="bg-slate-100 ">
        <Header />
        <Hero />
        <Achievements />
        <About />
    </div>
  )
}

export default Home