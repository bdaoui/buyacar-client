import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="p-0 h-16 md:h-10 bg-emerald-500 text-sm md:text-base flex flex-col md:flex-row items-center md:justify-between md:p-6">
        <span className="text-sm text-white sm:text-center">© 2022 <Link to="/" className="hover:underline">Buy A Car</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-white sm:mt-0">
            <li>
                <span className="mr-2 hover:underline">Feel free to contact me @</span>
            </li>
            <li>
                <span className="mr-4 hover:underline md:mr-6">+33 3923 2903</span>
            </li>
        </ul>
    </footer>

  )
}

export default Footer