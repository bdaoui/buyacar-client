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
      <header className="flex justify-center my-20 font-bold text-gold text-2xl md:text-4xl ">
        {car?.make} {car?.model}
      </header>

      <section className="flex flex-col lg:flex-row">
        
        <div className="w-full lg:w-2/4">
          {car.image && (
            <div key={car._id}>
              <img
                src={car?.image[imageIndex]}
                alt={car?.make}
                className="flex justify-center mx-auto mb-10 md:mb-20 px-10"
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

        <div className="w-full lg:w-2/4 h-screen text-base flex flex-col lg:flex-row gap-5 lg:gap-10">
          <section className="flex md:w-1/4 flex-col gap-y-5 lg:gap-y-8 text-center lg:text-left">
            <p>
              Marque: <span className="italic text-gold">{car?.make}</span>
            </p>
            <p>
              Modèle: <span className="italic text-gold">{car?.model}</span>
            </p>
            <p>
              <BsCurrencyEuro/> <span className="italic text-gold">{car?.price}</span>
            </p>
            <p>
              <FaRoad />
              <span className="italic text-gold">{car?.mileage}km</span>
            </p>
            <p>
              <TfiSpray /> <span className="italic text-gold">{car?.color}</span>
            </p>
            <p>
              <RiGasStationFill /> <span className="italic text-gold">{car?.fuel}</span>
            </p>
          </section>

          <section className="flex md:w-1/4 flex-col gap-y-5 lg:gap-y-8 text-center lg:text-left">
            <p>
              <GiGearStickPattern />
              <span className="italic text-gold">{car?.transmission}</span>
            </p>
            <p>
              <TbEngine /> <span className="italic text-gold">{car?.engine} L</span>
            </p>
            <p>
              <GiCarDoor />
              <span className="italic text-gold">{car?.doors}</span>
            </p>
            <p>
              <GiCarSeat />
              <span className="italic text-gold">{car?.seats}</span>
            </p>
            <p>
              <BsFillCalendar2DateFill />
              <span className="italic text-gold">{car?.year}</span>
            </p>
          </section>

          <section className="flex md:w-2/4 flex-col h-full gap-y-5 lg:gap-y-8 text-center lg:text-left ">
            <CgQuote />
            <span className="italic text-gold ">{car?.description}</span>
          </section>
          
        </div>

      </section>
    </div>
  );
};

export default CarDetails;
