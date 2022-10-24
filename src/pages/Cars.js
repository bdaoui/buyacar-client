import React from 'react'
import Contact from '../components/Contact'
import Filter from '../components/Filter'
import Header from '../components/Header'

const Cars = () => {
  
  const data = [ 
    {
      image: "https://m.atcdn.co.uk/a/media/w800h600/0ca14354a2d340dcb1a989ba871ec80d.jpg",
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
      name: "Volvo XC40 Rechargeugeot 308 SW",
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
      image: "https://m.atcdn.co.uk/a/media/w800h600/0ca14354a2d340dcb1a989ba871ec80d.jpg",
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
  




  return (
    <>
      <Header /> 
      <Filter />

      <div>
          {cars.map((car) => {
            return <div key={car._id}>

            <h1>Name: {car.name}</h1>
            <h2>Price: {car.price}</h2>
            <span>Description: {car.description}</span>
            <img src={car.image} alt='pic'className='w-10 h-10' />
            <Contact />

            </div>
            })}
      </div>
    </>
  )
}

export default Cars