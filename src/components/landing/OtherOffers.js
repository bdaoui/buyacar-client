import React from "react";
import { Link } from "react-router-dom";

const OtherOffers = ({ cars }) => {

  let counter = 0 
  return (
    <div
      id="carGallery"
      className="flex flex-col lg:flex-row justify-center md:w-5/6 lg:w-2/4 m-auto md:flex-wrap md:p-10 "
    >
      <header className="w-full">
        <h1 className="text-2xl md:text-5xl text-center m-auto font-bold py-4 text-gold">
          ~<span className="text-lg md:text-4xl"> Autres Offres </span> ~ 
        </h1>
      </header>
      {cars.map((car) => {
        
        // Only Counter Number of Cars Visible
        counter++ 
        if(counter > 4 ) return true

        return (
          <div key={car._id} className="p-5 md:px-6 lg:w-2/4">
            <div className="bg-black rounded-lg border border-gray-200 shadow-2xl">
              <Link to={`/${car._id}`}>
                <img
                  className="rounded-t-lg w-full h-[130px] sm:h-[200px] md:h-[350px] lg:h-[225px] overflow-hidden  m-auto"
                  src={car.image[0]}
                  alt={car.name}
                />
              </Link>
              <div className="p-3">
                <section className="flex flex-row justify-around  ">
                  <h5 className="text-xs sm:text-sm md:text-lg font-bold tracking-tight text-white">
                    {car.make + " " + car.model}
                  </h5>
                </section>

                <section className="flex flex-col justify-center mb-0 sm:mb-2 gap-2">
                  <h1 className="text-xs sm:text-sm md:text-lg text-center text-white">
                    € {car.price}{" "}
                  </h1>

                  <div className="flex justify-center mt-1 sm:mt-3 md:mt-5 gap-2">
                    <section className="p-2 border-r-white border-r-2 flex flex-col">
                      <h1 className="text-[0.6rem] sm:text-sm md:text-lg font-light  text-white">Année </h1>
                      <h1 className="text-[0.6rem] sm:text-sm md:text-lg text-white">{car.year} </h1>
                    </section>

                    <section className="p-2 border-r-white border-r-2">
                      <h1 className="text-[0.6rem] sm:text-sm md:text-lg font-light text-white">
                        Kilométrage{" "}
                      </h1>
                      <h1 className="text-[0.6rem] sm:text-sm md:text-lg text-white">{car.mileage} </h1>
                    </section>

                    <section className="p-2">
                      <h1 className="text-[0.6rem] sm:text-sm md:text-lg font-light text-white">
                        Carburant{" "}
                      </h1>
                      <h1 className="text-[0.6rem] sm:text-sm md:text-lg text-white"> {car.fuel} </h1>
                    </section>
                  </div>
                </section>

                <p className="my-1 sm:my-3 text-[0.5rem] sm:text-sm md:text-base font-normal text-white h-10">
                  {car.description.substr(0, 80) + "..."}
                </p>
                <Link
                  to={`/${car._id}`}
                  className="inline-flex items-center p-1 sm:py-2 sm:px-3 text-[0.5rem] sm:text-sm md:text-lg font-medium text-center text-black bg-white rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300"
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
        className=" w-2/4 md:w-full mx-auto py-2 my-2 px-3 md:px-5 mb-20 text-base font-semibold text-center text-white bg-gold rounded-lg hover:bg-gold/90 focus:ring-4 focus:outline-none focus:ring-gold"
      >
        {" "}
        PLUS D'OFFRES
      </Link>
    </div>
  );
};

export default OtherOffers;
