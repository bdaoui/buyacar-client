import React, {useState, useEffect} from 'react';
import { HashLink } from 'react-router-hash-link';
import { Route, Routes} from 'react-router-dom'
import CarDetails from './pages/CarDetails'
import Landing from './pages/Landing'
import Info from './pages/Info'
import Login from './pages/Login'
import Cars from './pages/Cars'
import Dashboard from './pages/Dashboard'
import OutletComponent from './components/OutletComponent'

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listenToScroll = () => {
    let hideTill = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > hideTill) {
      isVisible && setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <div className='App h-100vh bg-black/90'>
      {isVisible && (
        <HashLink smooth to="/#top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8 mb-1 md:mb-0 md:w-10 md:h-10 bottom-16 right-1 md:bottom-10 md:right-1 lg:bottom-20 lg:right-10 fixed text-gold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </HashLink>
      )}
  
       <Routes>
          <Route element={<OutletComponent />}>
          <Route path="/" element={<Landing />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/:id" element={<CarDetails />} />
          <Route path="/info" element={<Info />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          </Route>
       </Routes>
   
    </div>
  )
}

export default App