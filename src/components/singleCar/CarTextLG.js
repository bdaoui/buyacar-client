import React from 'react'
import {BsCurrencyEuro, BsFillCalendar2DateFill} from 'react-icons/bs'
import {FaRoad, FaCarAlt} from 'react-icons/fa'
import {TfiSpray} from 'react-icons/tfi'
import {RiGasStationFill} from 'react-icons/ri'
import {GiGearStickPattern, GiCarDoor, GiCarSeat} from 'react-icons/gi'
import {TbEngine} from 'react-icons/tb'
import {CgQuote} from 'react-icons/cg'


const CarTextLG = ({car}) => {

  return (
    <>
    <div className="w-full text-base flex pb-20">

    <div class="shadow-lg rounded-2xl w-36 p-4 h-1/2 bg-black">
          <div class="flex items-center">
              <span class="bg-green-500 p-2 h-8 w-8 rounded-full relative">
                <FaCarAlt className="text-xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
              </span>
              <p class="text-md font-bold text-gold ml-2">
                  Make:
              </p>
          </div>
          <div class="flex flex-col justify-start">
              <p class="text-gold text-base text-left font-bold my-4">
                  {car.make}
              </p>
          </div>
      </div>

      <div class="shadow-lg rounded-2xl w-36 p-4 h-1/2 bg-black">
          <div class="flex items-center">
              <span class="bg-green-500 p-2 h-8 w-8 rounded-full relative">
                <FaCarAlt className="text-xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
              </span>
              <p class="text-md font-bold text-gold ml-2">
                  Model:
              </p>
          </div>
          <div class="flex flex-col justify-start">
              <p class="text-gold text-base text-left font-bold my-4">
                  {car.model}
              </p>
          </div>
      </div>
      
    
  
      <div class="shadow-lg rounded-2xl w-36 p-4 h-1/2 bg-black">
          <div class="flex items-center">
              <span class="bg-green-500 p-2 h-8 w-8 rounded-full relative">
                <BsCurrencyEuro className="text-xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
              </span>
              <p class="text-md font-bold text-gold ml-2">
                  Price:
              </p>
          </div>
          <div class="flex flex-col justify-start">
              <p class="text-gold text-base text-left font-bold my-4">
                  {car.price}
              </p>
          </div>
      </div>

      <div class="shadow-lg rounded-2xl w-36 p-4 h-1/2 bg-black">
          <div class="flex items-center">
              <span class="bg-green-500 p-2 h-8 w-8 rounded-full relative">
                <FaRoad className="text-xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
              </span>
              <p class="text-md font-bold text-gold ml-2">
                  Kilometrage:
              </p>
          </div>
          <div class="flex flex-col justify-start">
              <p class="text-gold text-base text-left font-bold my-4">
                  {car.mileage} km
              </p>
          </div>
      </div>
      
      <div class="shadow-lg rounded-2xl w-36 p-4 h-1/2 bg-black">
          <div class="flex items-center">
              <span class="bg-green-500 p-2 h-8 w-8 rounded-full relative">
                <TfiSpray className="text-xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
              </span>
              <p class="text-md font-bold text-gold ml-2">
              Colouer:
              </p>
          </div>
          <div class="flex flex-col justify-start">
              <p class="text-gold text-base text-left font-bold my-4">
                  {car.color} km
              </p>
          </div>
      </div>

      <div class="shadow-lg rounded-2xl w-36 p-4 h-1/2 bg-black">
          <div class="flex items-center">
              <span class="bg-green-500 p-2 h-8 w-8 rounded-full relative">
                <RiGasStationFill className="text-xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
              </span>
              <p class="text-md font-bold text-gold ml-2">
              Fuel:
              </p>
          </div>
          <div class="flex flex-col justify-start">
              <p class="text-gold text-base text-left font-bold my-4">
                  {car.fuel} km
              </p>
          </div>
      </div>

      <div class="shadow-lg rounded-2xl w-36 p-6 h-1/2 bg-black">
          <div class="flex items-center">
              <span class="bg-green-500 p-2 h-10 w-10 rounded-full relative">
                <GiGearStickPattern className="text-xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
              </span>
              <p class="text-md font-bold text-gold ml-2">
              Transmission:
              </p>
          </div>
          <div class="flex flex-col justify-start">
              <p class="text-gold text-base text-left font-bold my-4">
                  {car.transmission}
              </p>
          </div>
      </div>

      <div class="shadow-lg rounded-2xl w-36 p-4 h-1/2 bg-black">
          <div class="flex items-center">
              <span class="bg-green-500 p-2 h-8 w-8 rounded-full relative">
                <TbEngine className="text-xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
              </span>
              <p class="text-md font-bold text-gold ml-2">
              Engine:
              </p>
          </div>
          <div class="flex flex-col justify-start">
              <p class="text-gold text-base text-left font-bold my-4">
                  {car.engine}
              </p>
          </div>
      </div>

      <div class="shadow-lg rounded-2xl w-36 p-4 h-1/2 bg-black">
          <div class="flex items-center">
              <span class="bg-green-500 p-2 h-8 w-8 rounded-full relative">
                <GiCarDoor className="text-xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
              </span>
              <p class="text-md font-bold text-gold ml-2">
              Doors:
              </p>
          </div>
          <div class="flex flex-col justify-start">
              <p class="text-gold text-base text-left font-bold my-4">
                  {car.doors}
              </p>
          </div>
      </div>

      <div class="shadow-lg rounded-2xl w-36 p-4 h-1/2 bg-black">
          <div class="flex items-center">
              <span class="bg-green-500 p-2 h-8 w-8 rounded-full relative">
                <GiCarSeat className="text-xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
              </span>
              <p class="text-md font-bold text-gold ml-2">
              Seats:
              </p>
          </div>
          <div class="flex flex-col justify-start">
              <p class="text-gold text-base text-left font-bold my-4">
                  {car.seats}
              </p>
          </div>
      </div>

      <div class="shadow-lg rounded-2xl w-36 p-4 h-1/2 bg-black">
          <div class="flex items-center">
              <span class="bg-green-500 p-2 h-8 w-8 rounded-full relative">
                <BsFillCalendar2DateFill className="text-xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
              </span>
              <p class="text-md font-bold text-gold ml-2">
              Anne:
              </p>
          </div>
          <div class="flex flex-col justify-start">
              <p class="text-gold text-base text-left font-bold my-4">
                  {car.year}
              </p>
          </div>
      </div>

      
      <div class="shadow-lg rounded-2xl w-36 p-4 h-1/2 bg-black">
          <div class="flex items-center">
              <span class="bg-green-500 p-2 h-8 w-8 rounded-full relative">
                <CgQuote className="text-xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
              </span>
              <p class="text-md font-bold text-gold ml-2">
              Description:
              </p>
          </div>
          <div class="flex flex-col justify-start">
              <p class="text-gold text-sm text-left font-bold my-4">
                  {car.description}
              </p>
          </div>
      </div>
       
   
  </div>

  
  </>
  )
}

export default CarTextLG