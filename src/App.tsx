import { NavBar } from "./components/NavBar"
import { Home } from "./sections/Home"
import { Projects } from "./sections/Projects"
import { Technologies } from "./sections/Technologies"

function App() {

  return (
    <>
      <NavBar />
      <Home />
      <Technologies />
      <Projects />
    </>
  )
}

export default App
