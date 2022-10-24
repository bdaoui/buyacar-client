import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CarDetails from './pages/CarDetails'
import Cars from './pages/Cars'
import Info from './pages/Info'
import Login from './pages/Login'

const App = () => {
  return (
    <div className='flex flex-col h-screen justify-between'>
    <div>
        <Navbar />
    </div>
       <Routes>
          <Route path="/" element={<Cars />} />
          <Route path="/:id" element={<CarDetails />} />
          <Route path="/info" element={<Info />} />
          <Route path="/admin/login" element={<Login />} />
       </Routes>
    <div>
      <Footer />
    </div>
    </div>
  )
}

export default App