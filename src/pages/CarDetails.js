import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {BsCurrencyEuro, BsFillCalendar2DateFill} from 'react-icons/bs'
import {FaRoad} from 'react-icons/fa'
import {TfiSpray} from 'react-icons/tfi'
import {RiGasStationFill} from 'react-icons/ri'
import {GiGearStickPattern, GiCarDoor, GiCarSeat} from 'react-icons/gi'
import {TbEngine} from 'react-icons/tb'
import {CgQuote} from 'react-icons/cg'

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:5005/car/${id}`)
      .then((res) => {
        console.log(res);
        setCar(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const nextImage = () => {
    const endArray = car.image.length;
    const next = imageIndex + 1 === endArray ? 0 : imageIndex + 1;
    setImageIndex(next);
  };

  const previousImage = () => {
    const endArray = car.image.length;
    const prev = imageIndex <= 0 ? endArray - 1 : imageIndex - 1;
    console.log(prev, endArray, imageIndex);
    setImageIndex(prev);
  };

  console.log(car);
  return (
    <div className="text-white w-full">
      <header className="flex w-full justify-center my-10 font-bold text-gold text-2xl md:text-4xl ">
        {car?.make} {car?.model}
      </header>

      <section className="flex w-full flex-col lg:flex-row">
        
        <div className="w-full">
          {car.image && (
            <div key={car._id}>
              <img
                src={car?.image[imageIndex]}
                alt={car?.make}
                className="flex justify-center mx-auto h-[150px] sm:h-[200px] md:h-[400px] lg:h-[500px] mb-5"
              />
            </div>
          )}
          <div className="flex justify-center mb-10">
            <button onClick={(e) => previousImage()} className="pr-2">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gold "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
            <p className="text-white text-lg">
              {imageIndex + 1} / {car?.image?.length}
            </p>

            <button onClick={(e) => nextImage()} className="pl-2">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
</section>


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

      
    </div>
  );
};

export default CarDetails;
