import { Outlet } from "react-router-dom"
import Home from "./Components/Pages/Home"
import Navbar from "./Components/Navbar"


function App() {

  return (
    <>
      <Navbar />
      <Outlet>
        <Home />
      </Outlet>
    </>
  )
}

export default App
