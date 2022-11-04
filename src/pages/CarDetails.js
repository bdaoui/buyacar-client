import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    <div className="text-white  ">
      <header className="flex justify-center my-20 font-bold text-gold text-2xl md:text-4xl">
        {car?.make} {car?.model}
      </header>

      <section className="flex flex-col lg:flex-row ">
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

        <div className="w-full lg:w-3/4 h-screen text-base flex flex-col lg:flex-row gap-5 lg:gap-10">
          <section className="flex md:w-1/4 flex-col gap-y-5 lg:gap-y-10 text-center lg:text-left">
            <p>
              Marque: <span className="italic text-gold">{car?.make}</span>
            </p>
            <p>
              Modèle: <span className="italic text-gold">{car?.model}</span>
            </p>
            <p>
              Prix: <span className="italic text-gold">{car?.price + "€"}</span>
            </p>
            <p>
              Kilométrage:{" "}
              <span className="italic text-gold">{car?.mileage}</span>
            </p>
            <p>
              Couleurs: <span className="italic text-gold">{car?.color}</span>
            </p>
            <p>
              Carburant: <span className="italic text-gold">{car?.fuel}</span>
            </p>
          </section>

          <section className="flex md:w-1/4 flex-col gap-y-5 lg:gap-y-10 text-center lg:text-left">
            <p>
              Boîte de vitesse:{" "}
              <span className="italic text-gold">{car?.transmission}</span>
            </p>
            <p>
              Moteur: <span className="italic text-gold">{car?.engine}L</span>
            </p>
            <p>
              Nombre de portes:{" "}
              <span className="italic text-gold">{car?.doors}</span>
            </p>
            <p>
              Nombre de place(s):{" "}
              <span className="italic text-gold">{car?.seats}</span>
            </p>
            <p>
              Année-modèle:{" "}
              <span className="italic text-gold">{car?.seats}</span>
            </p>
          </section>

          <section className="flex md:w-2/4 flex-col h-full gap-y-5 lg:gap-y-10 text-center mx-20 lg:text-left ">
            Description:{" "}
            <span className="italic text-gold ">{car?.description}</span>
          </section>
        </div>
      </section>
    </div>
  );
};

export default CarDetails;
