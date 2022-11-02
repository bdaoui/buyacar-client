import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Filter from "../components/Filter";

const Cars = () => {
  const server = "http://localhost:5005";

  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([...cars])

  // Filter
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [selectedMileage, setSelectedMileage] = useState(0);

  const [make, setMake] = useState("");
  const [price, setPrice] = useState("");
  const [model, setModel] = useState("");
  const [bestDeal, setBestDeal] = useState("");
  const [mileage, setMileage] = useState("");
  const [image, setImage] = useState("");
  const [gearBox, setGearBox] = useState("");
  const [description, setDescription] = useState("");

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios
      .get(`${server}/api/cars`)
      .then((response) => setCars(response.data))
      .catch((err) => console.log(err));
  }, [refresh]);



  useEffect(() => {
    let searchQuery = {};

    if(selectedMileage){
      searchQuery.mileage = selectedMileage
    }
    
    if(selectedPrice){
      searchQuery.price = Number(selectedPrice) 

    }


    const spreadCar = [...cars]

    let filtered = spreadCar.filter(car =>{

      if(searchQuery.price < car.price ) return false

      if(searchQuery.mileage < car.mileage) return false


      return car 



    })


   setFilteredCars(filtered)


  },[selectedPrice, selectedMileage, cars])


  const handleCarRequest = (e) => {
    e.preventDefault();

    console.log("I am trying to get it sent with ", price, image, description);
    const data = new FormData();
    data.append("price", price);
    data.append("image", e.target.image.files);
    data.append("make", make);
    data.append("model", model);
    data.append("bestDeal", bestDeal);
    data.append("gearBox", gearBox);
    data.append("description", description);

    axios.post(`${server}/api/cars`, data).then((response) => setRefresh(true));
  };


  console.log("cars ", cars)
  console.log("filtered cars ", filteredCars)


  return (
    <div>
      <div
        id="carGallery"
        className="flex flex-col md:flex-row justify-center md:w-2/4 m-auto md:flex-wrap p-10"
      >
        <header className="w-full">
          <h1 className="text-lg md:text-4xl text-center m-auto font-bold py-4 mb-5 text-gold">
            --- Catalogue Complet ---
          </h1>

          
        </header>

      <section className="flex">

        <Filter setSelectedMileage={setSelectedMileage} selectedMileage={selectedMileage} setSelectedPrice={setSelectedPrice} selectedPrice={selectedPrice} />
      </section>

        { filteredCars.length === 0  && 

        <section className="h-screen w-full mt-10 text-3xl ">
          <h1 className="underline text-center text-red-900 translate-y-40">Aucune Voiture Selectioneé</h1>

        </section>

        }


        {filteredCars?.map((car) => {
          return (
            <div key={car._id} className="p-10 w-full ">
              <div className="bg-black rounded-lg border border-gray-200 shadow-2xl text-white ">
                <Link to={`/${car._id}`}>
                  <img
                    className="rounded-t-lg"
                    src={car.image[0]}
                    alt={car.name}
                  />
                </Link>
                <div className="p-5 ">
                  <section className="flex flex-row justify-around  ">
                    <h5 className="text-sm md:text-lg font-bold tracking-tight text-white">
                      {car.make + " " + car.model}
                    </h5>
                  </section>

                  <section className="flex flex-col justify-center mt-5 gap-2">
                    <h1 className="text-base md:text-xl text-center">
                      € {car.price}{" "}
                    </h1>

                    <div className="flex flex-col lg:flex-row justify-center mt-5 gap-2">
                      <section className="p-2 md:border-r-white md:border-r-2 flex flex-col">
                        <h1 className="text-sm font-light md:text-base text-gold">
                          Année{" "}
                        </h1>
                        <h1 className="text-sm md:text-base">{car.year} </h1>
                      </section>

                      <section className="p-2 md:border-r-white md:border-r-2">
                        <h1 className="text-sm md:text-base font-light text-gold">
                          Kilométrage{" "}
                        </h1>
                        <h1 className="text-sm md:text-base">{car.mileage} </h1>
                      </section>

                      <section className="p-2 md:border-r-white md:border-r-2">
                        <h1 className="text-sm md:text-base font-light text-gold">
                          Carburant{" "}
                        </h1>
                        <h1 className="text-sm md:text-base"> {car.fuel} </h1>
                      </section>

                      <section className="p-2">
                        <h1 className="text-sm md:text-base font-light text-gold">
                          Boite de Vitesse{" "}
                        </h1>
                        <h1 className="text-sm md:text-base">
                          {car.transmission}{" "}
                        </h1>
                      </section>
                    </div>
                  </section>

                  <h5 className="text-xs md:text-base font-bold tracking-tight text-white mt-8">
                    {car.description}
                  </h5>

                  <Link
                    to={`/${car._id}`}
                    className="inline-flex items-center py-2 px-3 text-sm font-medium text-center mt-5 text-white bg-gold rounded-lg hover:bg-gold/90 focus:ring-4 focus:outline-none focus:ring-gold"
                  >
                    See more
                    <svg
                      aria-hidden="true"
                      className="ml-2 -mr-1 w-4 h-4 "
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
      </div>
    </div>
  );
};

export default Cars;
