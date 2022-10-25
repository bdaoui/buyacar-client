import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="p-0 h-2 bg-emerald-500 shadow md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-white sm:text-center">© 2022 <Link to="/" className="hover:underline">Buy A Car</Link>. All Rights Reserved.
        </span>
        {/* <ul className="flex flex-wrap items-center mt-3 text-sm text-white sm:mt-0">
            <li>
                <Link to="/info" className="mr-4 hover:underline md:mr-6 ">About</Link>
            </li>
            <li>
                <Link href="/" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
            </li>
        </ul> */}
    </footer>

  )
}

export default Footer