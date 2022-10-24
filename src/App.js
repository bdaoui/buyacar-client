import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CarDetails from './pages/CarDetails'
import Landing from './pages/Landing'
import Info from './pages/Info'
import Login from './pages/Login'
import Cars from './pages/Cars'

const App = () => {
  return (
    <div className='h-screen'>
    <div>
        <Navbar />
    </div>
       <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/:id" element={<CarDetails />} />
          <Route path="/info" element={<Info />} />
          <Route path="/admin/login" element={<Login />} />
       </Routes>
    <div className='fixed bottom-0 w-full'>
      <Footer />
    </div>
    </div>
  )
}

export default App