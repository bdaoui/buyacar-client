import React from 'react'
import {BsCurrencyEuro, BsFillCalendar2DateFill} from 'react-icons/bs'
import {FaRoad} from 'react-icons/fa'
import {TfiSpray} from 'react-icons/tfi'
import {RiGasStationFill} from 'react-icons/ri'
import {GiGearStickPattern, GiCarDoor, GiCarSeat} from 'react-icons/gi'
import {TbEngine} from 'react-icons/tb'
import {CgQuote} from 'react-icons/cg'

const CarTextSM = ({car}) => {
  return (
    <>
    <div className="w-full text-xs md:text-xl flex">
          
       
    <section className="flex flex-col w-1/2 gap-y-2 md:gap-y-5">

      <p className="flex justify-left pl-10 md:pl-32">
        Marque: <span className="italic text-gold ml-2">{car?.make}</span>
      </p>

      <p className="flex justify-left pl-10 md:pl-32">
        Modèle: <span className="italic text-gold ml-2">{car?.model}</span>
      </p>
     
        <p className="flex justify-left pl-10 md:pl-32"><BsCurrencyEuro className="mt-1 mr-2 text-lg"/> 
        <span className="italic text-gold">{car?.price}</span></p>
      
        <p className="flex justify-left pl-10 md:pl-32">
        <FaRoad className="mt-1 mr-2 text-lg" />
        <span className="italic text-gold">{car?.mileage}km</span>
      </p>
    
      <p className="flex justify-left pl-10 md:pl-32">
        <TfiSpray className="mt-1 mr-2 text-lg"/> <span className="italic text-gold">{car?.color}</span>
      </p>

      <p className="flex justify-left pl-10 md:pl-32">
        <RiGasStationFill className="mt-1 mr-2 text-lg"/> <span className="italic text-gold">{car?.fuel}</span>
      </p>
   
</section>
<section className="flex flex-col w-1/2 gap-y-2 md:gap-y-5">
    <p className="flex justify-left pl-10 md:pl-32">
        <GiGearStickPattern className="mt-1 mr-2 text-lg"/>
        <span className="italic text-gold">{car?.transmission}</span>
      </p>

      <p className="flex justify-left pl-10 md:pl-32">
        <TbEngine className="mt-1 mr-2 text-lg"/> <span className="italic text-gold">{car?.engine} L</span>
      </p>
     
      <p className="flex justify-left pl-10 md:pl-32">
        <GiCarDoor className="mt-1 mr-2 text-lg"/>
        <span className="italic text-gold">{car?.doors}</span>
      </p>

      <p className="flex justify-left pl-10 md:pl-32">
        <GiCarSeat className="mt-1 mr-2 text-lg"/>
        <span className="italic text-gold">{car?.seats}</span>
      </p>

      <p className="flex justify-left pl-10 md:pl-32">
        <BsFillCalendar2DateFill className="mt-1 mr-2 text-lg"/>
        <span className="italic text-gold">{car?.year}</span>
      </p>
      

    </section>
  </div>
<section className="flex flex-col w-full py-5 pb-20">
 <CgQuote className="mt-3 text-5xl ml-5"/>
    <p className="text-xs md:text-base px-10">
      <span className="italic text-gold ">{car?.description}</span></p>

      </section>
  </>
  )
}

export default CarTextSM