import React from 'react'
import Contact from '../components/Contact'
import Filter from '../components/Filter'
import Header from '../components/Header'
import data from './generated.json'

const Cars = () => {
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
            <div key={car._id}>
            <h1>Make: {car.make}</h1>
            <h2>Model: {car.model}</h2>
            <span>Description: {car.description}</span>
            <img src={car.picture} alt='pic'className='w-10 h-10' />
            <Contact />
            </ div>
            })}
      </div>
    </>
  )
}

export default Cars