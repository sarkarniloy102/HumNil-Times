import { Outlet } from "react-router-dom"
import Home from "./Components/Pages/Home/Home"
import Navbar from "./Components/Shared/Navbar"



function App() {

  return (
    <>
      <div className="font-inter">
        <Navbar />
        <Outlet>
          <Home />
        </Outlet>
      </div>

    </>
  )
}

export default App
