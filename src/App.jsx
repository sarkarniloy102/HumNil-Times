import { Outlet } from "react-router-dom"
import Home from "./Components/Pages/Home/Home"
import Navbar from "./Components/Shared/Navbar"
import Footer from "./Components/Shared/Footer"



function App() {

  return (
    <>
      <div className="font-inter">
        <Navbar />
        <Outlet>
          <Home />
        </Outlet>
        <Footer />
      </div>

    </>
  )
}

export default App
