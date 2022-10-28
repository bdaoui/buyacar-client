import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'


const OutletComponent = () => {
  return (
    <div>
            <Navbar />
            <Outlet />
        <div className='fixed bottom-0 w-full'>
            <Footer />
        </div>

    </div>
  )
}

export default OutletComponent