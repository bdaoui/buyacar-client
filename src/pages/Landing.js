import React from 'react'
import Contact from '../components/Contact'
import Filter from '../components/Filter'
import Header from '../components/Header'
import BestOffer from '../components/BestOffer.js'
import { Link } from 'react-router-dom'


const Landing = () => {
  
  const data = [ 
    {
      image: "https://m.atcdn.co.uk/ect/media/w1224/b7656c050a5843d2a3ced6f7b80632bc.jpg",
      name: "Peugeot 308 SW",
      price: "24,746",
      id: 1
    },
    {
      image: "https://m.atcdn.co.uk/ect/media/w1224/b7656c050a5843d2a3ced6f7b80632bc.jpg",
      name: "Peugeot 2008  ",
      price: "24,746",
      id: 2
    },
    {
      image: "https://m.atcdn.co.uk/ect/media/w1224/130edbc6b0684515b22cf423d2f88693.jpg",
      name: "Volvo XC40 ",
      price: "24,746",
      id: 3
    },
    {
      image: "https://m.atcdn.co.uk/ect/media/w1224/3520ca655e03439a8b6a3e109f96b4af.jpg",
      name: "Renault Clio",
      price: "24,746",
      id: 4
    },
    {
      image: "https://m.atcdn.co.uk/ect/media/w1224/b7656c050a5843d2a3ced6f7b80632bc.jpg",
      name: "Mercedes-Benz GLA",
      price: "24,746",
      id: 5
    },
    {
      image: "https://m.atcdn.co.uk/ect/media/w1224/09cc253defdd49079596830eb120d196.jpg",
      name: "Toyota Corolla",
      price: "24,746",
      id: 6
    },
    {
      image: "https://m.atcdn.co.uk/ect/media/w1224/6bd0cbcbc1e74b3781d3e355b211cdc9.jpg",
      name: "Mazda CX-30",
      price: "24,746",
      id: 7
    },
    {
      image: "https://m.atcdn.co.uk/ect/media/w1224/675691b21d5a41e8b7240cd1692c1b4e.jpg",
      name: "Tesla Model Y",
      price: "24,746",
      id: 8
    }
    
  ]
  
  const cars = data
  console.log(cars)
  //Main page at '/'. User should see header with welcome etc then straight away a filter dropdown with car makes. 
  //Below this will have all the cars rendered and changable by filter
  //Each car should also have a ynamc contact form which prefills the car the user is selected on and thier name, number, email and message if they wish
  //used random json generator to try to map some stuff but couldnt get it to work
  

  // A good filter function would, be a button to decide the display size of the gallery. Like how large the image of the cars need to be




  return (
    <>
      <Header /> 
      <BestOffer /> 
      {/* <Contact /> */}
      
      <div id="carGallery" className='flex flex-col md:flex-row justify-center md:w-2/4 m-auto md:flex-wrap p-10' >
        <header className='w-full'>
          <h1 className='text-lg md:text-4xl text-center m-auto font-bold py-4'>---Other Offers---</h1>
        </header>
          {cars.map((car) => {
            return <div key={car._id} className="p-10 lg:w-2/4 ">
            {/*<h1 className='font-medium text-lg	'>{car.name}</h1>
            <img src={car.image} alt='pic'className='w-20 h-20 md:w-fit md:h-fit' />
            <h2 className='font-medium'>Price: {car.price}</h2>
            <span className='font-medium'>Description: {car.description}</span> */}
              <div className="bg-emerald-500 rounded-lg border border-gray-200 shadow-2xl">
                  <Link to="">
                      <img className="rounded-t-lg" src={car.image} alt="" />
                  </Link>
                  <div className="p-5">                      
                      <h5 className="mb-2 text-sm md:text-lg font-bold tracking-tight text-white">{car.name}</h5>    
                      <h5 className="mb-2 text-sm md:text-lg font-bold tracking-tight text-white">€ {car.price}</h5>            
                      <p className="mb-3 text-sm md:text-basefont-normal text-white">{car.description}</p>
                      <Link to='' className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300">
                          See more
                          <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </Link>
                  </div>
              </div>
            </div>
          })}
          <Link to="/cars" className="py-2 px-3 md:px-10 mb-20 text-sm font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300"> More Offers</Link>
      </div>
    </>
  )
}

export default Landing