import React, { useState, useEffect } from 'react'
import Contact from '../components/Contact'
import Filter from '../components/Filter'
import Header from '../components/Header'
import BestOffer from '../components/BestOffer.js'
import { Link } from 'react-router-dom'
import Testimonial from '../components/Testimonial'
import axios from 'axios'


const Landing = () => {
  const [cars, setCars] = useState([]);
  const server = "http://localhost:5005";

  // const data = [ 
  //   {
  //     image: "https://m.atcdn.co.uk/ect/media/w1224/b7656c050a5843d2a3ced6f7b80632bc.jpg",
  //     name: "Peugeot 308 SW",
  //     price: "24,746",
  //     transmission: "auto",
  //     id: 1
  //   },
  //   {
  //     image: "https://m.atcdn.co.uk/ect/media/w1224/b7656c050a5843d2a3ced6f7b80632bc.jpg",
  //     name: "Peugeot 2008  ",
  //     price: "24,746",
  //     transmission: "manual",
  //     id: 2
  //   },
  //   {
  //     image: "https://m.atcdn.co.uk/ect/media/w1224/130edbc6b0684515b22cf423d2f88693.jpg",
  //     name: "Volvo XC40 ",
  //     price: "24,746",
  //     transmission: "manual",
  //     id: 3
  //   },
  //   {
  //     image: "https://m.atcdn.co.uk/ect/media/w1224/3520ca655e03439a8b6a3e109f96b4af.jpg",
  //     name: "Renault Clio",
  //     price: "24,746",
  //     transmission: "auto",
  //     id: 4
  //   }
    
  // ]

  console.log(cars)
  //Main page at '/'. User should see header with welcome etc then straight away a filter dropdown with car makes. 
  //Below this will have all the cars rendered and changable by filter
  //Each car should also have a ynamc contact form which prefills the car the user is selected on and thier name, number, email and message if they wish
  //used random json generator to try to map some stuff but couldnt get it to work
  

  // A good filter function would, be a button to decide the display size of the gallery. Like how large the image of the cars need to be

  useEffect(() => {
    axios
      .get(`${server}/api/cars`)
      .then((response) => setCars(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header /> 
      <BestOffer /> 
      {/* <Contact /> */}
      

      <div id="carGallery" className='flex flex-col md:flex-row justify-center md:w-2/4 m-auto md:flex-wrap p-10' >
        <header className='w-full'>
          <h1 className='text-lg md:text-4xl text-center m-auto font-bold py-4 text-gold'>--- Autres Offres---</h1>
        </header>
          {cars.map((car) => {
            console.log(car.id)
            return <div key={car.id} className="p-10 lg:w-2/4 ">

              <div className="bg-black rounded-lg border border-gray-200 shadow-2xl">
                  <Link to={`/${car.id}`}>
                      <img className="rounded-t-lg" src={car.image[0]} alt={car.name} />
                  </Link>
                  <div className="p-3"> 



                      <section className='flex flex-row justify-around  '>
                        <h5 className="text-sm md:text-lg font-bold tracking-tight text-white">{car.make + " " + car.model}</h5>      
                      </section>
                      
                      <section className='flex flex-col justify-center mb-2 gap-2'>
                        <h1 className='text-sm  text-center text-white'>€ {car.price} </h1>
                        
                        <div className='flex justify-center mt-5 gap-2'>
                        
                        <section className='p-2 border-r-white border-r-2 flex flex-col'>
                        <h1 className='text-sm font-light  text-white'>Année </h1>
                        <h1 className='text-sm  text-white'>{car.year} </h1>
                        </section>

                        <section className='p-2 border-r-white border-r-2'>
                        <h1 className='text-sm  font-light text-white'>Kilométrage </h1>
                        <h1 className='text-sm  text-white'>{car.mileage} </h1>
                        </section>

                        <section className='p-2 border-r-white border-r-2'>
                        <h1 className='text-sm  font-light text-white'>Carburant  </h1>
                        <h1 className='text-sm  text-white'> {car.fuel} </h1>
                        </section>
                       

                   

                        </div>

                    </section>                     
                              

                      <p className="mb-3 text-sm md:text-basefont-normal text-white">{car.description.substr(0,80)+"..."}</p>
                      <Link to={`/${car.id}`} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300">
                          voir plus
                          <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      </Link>
                  </div>
              </div>
            </div>
          })}
          
          <Link to="/cars" className=" w-full py-2 px-3 md:px-5 mb-20 text-base font-semibold text-center text-white bg-gold rounded-lg hover:bg-gold/90 focus:ring-4 focus:outline-none focus:ring-gold"> PLUS D'OFFRES</Link>
       
      </div>
      <Testimonial />
    </>
  )
}

export default Landing