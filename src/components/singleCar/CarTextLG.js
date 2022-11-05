import React from 'react'
import {BsCurrencyEuro, BsFillCalendar2DateFill} from 'react-icons/bs'
import {FaRoad} from 'react-icons/fa'
import {TfiSpray} from 'react-icons/tfi'
import {RiGasStationFill, RiCarLine, RiCarFill} from 'react-icons/ri'
import {GiGearStickPattern, GiCarDoor, GiCarSeat} from 'react-icons/gi'
import {TbEngine} from 'react-icons/tb'
import {CgQuote} from 'react-icons/cg'
import ContactSingleCar from './ContactSingleCar'


const CarTextLG = ({car}) => {
  return (
    <>
    <div className="w-[100%] text-2xl font-semibold flex p-[10%] pb-20 justify-center ">
          
       <div className='flex flex-col'>

        <section className="flex ">

    <section className="flex flex-col w-1/2 gap-y-2 md:gap-y-5 ">

      <p className="flex justify-left pl-10 md:pl-32 "><RiCarFill className="mt-1 mr-2 text-4xl"/>
        Marque: <span className="italic text-gold ml-2">{car?.make}</span>
      </p>

      <p className="flex justify-left pl-10 md:pl-32 "><RiCarLine className="mt-1 mr-2 text-4xl"/>
        Modèle: <span className="italic text-gold ml-2">{car?.model}</span>
      </p>
     
        <p className="flex justify-left pl-10 md:pl-32 "><BsCurrencyEuro className="mt-1 mr-2 text-4xl"/> 
        Prix: <span className="italic text-gold ml-2">{car?.price}</span></p>
      
        <p className="flex justify-left pl-10 md:pl-32 ">
        <FaRoad className="mt-1 mr-2 text-4xl" />
        Kilométrage: <span className="italic text-gold ml-2">{car?.mileage}km</span>
      </p>
    
      <p className="flex justify-left pl-10 md:pl-32 ">
        <TfiSpray className="mt-1 mr-2 text-4xl"/>Colouer:  <span className="italic text-gold ml-2">{car?.color}</span>
      </p>

      <p className="flex justify-left pl-10 md:pl-32 ">
        <RiGasStationFill className="mt-1 mr-2 text-4xl"/> 
        Carburant:  <span className="italic text-gold ml-2">{car?.fuel}</span>
      </p>
   
</section>

<section className="flex flex-col w-full ml-10 gap-y-2 md:gap-y-5">
    <p className="flex justify-left pl-10 md:pl-32 ">
        <GiGearStickPattern className="mt-1 text-4xl"/>
        Boite de Vitesse: <span className="italic text-gold ml-2">{car?.transmission}</span>
      </p>

      <p className="flex justify-left pl-10 md:pl-32 ">
      <TbEngine className="mt-1 mr-2 text-4xl"/>Moteur:  <span className="italic text-gold ml-2">{car?.engine} L</span>
      </p>
     
      <p className="flex justify-left pl-10 md:pl-32 ">
      <GiCarDoor className="mt-1 mr-2 text-4xl"/>Portes: 
        <span className="italic text-gold ml-2">{car?.doors}</span>
      </p>

      <p className="flex justify-left pl-10 md:pl-32 ">
      <GiCarSeat className="mt-1 mr-2 text-4xl"/>Sieges: 
        <span className="italic text-gold ml-2">{car?.seats}</span>
      </p>

      <p className="flex justify-left pl-10 md:pl-32 ">
      <BsFillCalendar2DateFill className="mt-1 mr-2 text-4xl"/>Anneé: 
        <span className="italic text-gold ml-2">{car?.year}</span>
      </p>
      

    </section>

</section>

<section className="flex flex-col m-auto px-[10%] pt-10">
 <CgQuote className="text-[100px]"/>
    <p className="text-xs md:text-lg px-10">
      <span className="italic text-gold ">{car?.description}</span></p>

      </section>
</div>


  </div>

  
  </>
  )
}

export default CarTextLG