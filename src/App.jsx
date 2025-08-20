import { Outlet } from "react-router-dom"
import Home from "./Components/Pages/Home/Home"
import Navbar from "./Components/Shared/Navbar"



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
