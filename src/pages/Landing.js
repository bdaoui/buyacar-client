import React, { useState, useEffect } from "react";
import Contact from "../components/Contact";
import Filter from "../components/Filter";
import Header from "../components/Header";
import BestOffer from "../components/BestOffer.js";
import { Link } from "react-router-dom";
import Testimonial from "../components/Testimonial";
import axios from "axios";
import ContactForm from "../components/ContactForm";
import { HashLink } from "react-router-hash-link";



const Landing = () => {
  const [cars, setCars] = useState([]);
  const server = "http://localhost:5005";

  useEffect(() => {
    axios
      .get(`${server}/api/cars`)
      .then((response) => setCars(response.data))
      .catch((err) => console.log(err));
  }, []);



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
    <div>
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
      <Header />

      <section className="bg-black">
        <BestOffer />
      </section>

      <div
        id="carGallery"
        className="flex flex-col lg:flex-row justify-center md:w-5/6 lg:w-2/4 m-auto md:flex-wrap md:p-10 "
      >
        <header className="w-full">
          <h1 className="text-lg md:text-4xl text-center m-auto font-bold py-4 text-gold">
            --- Autres Offres---
          </h1>
        </header>
        {cars.map((car) => {
          return (
            <div key={car._id} className="p-5 md:px-6 lg:w-2/4">
              <div className="bg-black rounded-lg border border-gray-200 shadow-2xl">
                <Link to={`/${car._id}`}>
                  <img
                    className="rounded-t-lg w-full h-[200px] md:h-[325px] overflow-hidden  m-auto"
                    src={car.image[0]}
                    alt={car.name}
                  />
                </Link>
                <div className="p-3">
                  <section className="flex flex-row justify-around  ">
                    <h5 className="text-sm md:text-lg font-bold tracking-tight text-white">
                      {car.make + " " + car.model}
                    </h5>
                  </section>

                  <section className="flex flex-col justify-center mb-2 gap-2">
                    <h1 className="text-sm  text-center text-white">
                      € {car.price}{" "}
                    </h1>

                    <div className="flex justify-center mt-5 gap-2">
                      <section className="p-2 border-r-white border-r-2 flex flex-col">
                        <h1 className="text-sm font-light  text-white">
                          Année{" "}
                        </h1>
                        <h1 className="text-sm  text-white">{car.year} </h1>
                      </section>

                      <section className="p-2 border-r-white border-r-2">
                        <h1 className="text-sm  font-light text-white">
                          Kilométrage{" "}
                        </h1>
                        <h1 className="text-sm  text-white">{car.mileage} </h1>
                      </section>

                      <section className="p-2">
                        <h1 className="text-sm  font-light text-white">
                          Carburant{" "}
                        </h1>
                        <h1 className="text-sm  text-white"> {car.fuel} </h1>
                      </section>
                    </div>
                  </section>

                  <p className="mb-3 text-sm md:text-basefont-normal text-white h-10">
                    {car.description.substr(0, 80) + "..."}
                  </p>
                  <Link
                    to={`/${car._id}`}
                    className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300"
                  >
                    voir plus
                    <svg
                      aria-hidden="true"
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}

        <Link
          to="/cars"
          className=" w-2/4 md:w-full mx-auto py-2 my-5 px-3 md:px-5 mb-20 text-base font-semibold text-center text-white bg-gold rounded-lg hover:bg-gold/90 focus:ring-4 focus:outline-none focus:ring-gold"
        >
          {" "}
          PLUS D'OFFRES
        </Link>
      </div>
      <Testimonial />
      <ContactForm />
    </div>
  );
};

export default Landing;
