import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Filter from "../components/cars/Filter";
import { HashLink } from "react-router-hash-link";

const Cars = () => {
  const server = "http://localhost:5005";

  const [cars, setCars] = useState([]);

  const [filteredCars, setFilteredCars] = useState([...cars]);

  // Filter
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [selectedMileage, setSelectedMileage] = useState(0);
  const [selectedTransmission, setSelectedTransmission] = useState("");
  const [selectedFuel, setSelectedFuel] = useState("")

  const [validateSending, setValidateSending] = useState("")
  
  
  const [refresh, setRefresh] = useState(false);
  
  useEffect(() => {
    axios
    .get(`${server}/car`)
    .then((response) => {
    setFilteredCars(response.data)
    setCars(response.data)} )
    .catch((err) => console.log(err));
    
  }, [refresh]);
  
  
      const handlePrice =  () => {       
        const filteredByPrice =  [...cars].filter(car => {
         console.log("car price " ,car.price)
         console.log("selected price " , selectedPrice)
         return  selectedPrice > car.price 
        } )

        console.log(filteredByPrice)

        return filteredByPrice
      
      }
  
  


  const handleFilter = async (e) => {
    const filteredByPrice = handlePrice()
    const filteredbyMileage = []
    const filteredbyFuel = []
    const filteredbyTransmission = []


    setFilteredCars(filteredByPrice)








    // e.preventDefault()

    // let searchQuery = {};
    
    // if(selectedMileage){
    //   searchQuery.mileage = selectedMileage
    // }
    
    // if(selectedPrice){
    //   searchQuery.price = Number(selectedPrice) 

    // }
    


    // const spreadCar = [...cars]

    // Filter by Mileage && PRice
    // let filtered = spreadCar.filter(car =>{
      
      // if(car.fuel.toLowerCase()  !== "choose"  
      // && car.fuel.toLowerCase() !== selectedFuel.toLowerCase()) return false  
      
      // if(car.transmission.toLowerCase() !== "choose"  
      // && car.transmission.toLowerCase() !== selectedTransmission.toLowerCase()) return false
      
      // if(searchQuery.price < car.price ) return false
      // if(searchQuery.mileage < car.mileage) return false
      


    //  if(car.fuel.toLowerCase()  !== "choose" 
    //  && car.fuel.toLowerCase() !== selectedFuel.toLowerCase() ){
    //   return false
    //  }

    //  else if(car.transmission.toLowerCase() !== "choose"  
    //  && car.transmission.toLowerCase() !== selectedTransmission.toLowerCase()){
    //   return false
    //  }

    //  else if(searchQuery.price < car.price){
    //   return false
    //  }

    //  else if(searchQuery.mileage < car.mileage){
    //   return false
    //  }
    //  else return car
      

    // })

    // console.log(filtered)
    // setFilteredCars(filtered)
    
    // // Filter by Fuel Type
    
    // let secondFiltered = filtered.filter(car => {
    //   return car
      
    // })
    
    
    // // Filter By Transmission Type
    // let thirdFiltered = secondFiltered.filter(car =>{
    //   return car
    // } )

    
    
    // if(thirdFiltered ){
    //   setFilteredCars(thirdFiltered)
    // } 
    // else if(secondFiltered){
    //   setFilteredCars(secondFiltered)

    // }
    // else {
    //   setFilteredCars(filtered)

    // }

    
    // console.log('1 ', filtered)
    // console.log('2 ', secondFiltered)
    // console.log('3 ', thirdFiltered)


    // Validation of Sent Message

    // await setValidateSending("Recherche en Cours");
    // await setInterval( () => setValidateSending(""), 2000);

  }




  
  const reset = () =>{

    setFilteredCars(cars)

    // Resetting Filters
      setSelectedMileage(0)
      setSelectedPrice(0)
      setSelectedFuel("Choose")
      setSelectedTransmission("Choose")

    setRefresh(!refresh)

  }


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
        <HashLink smooth to="/cars#top">
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

      <div
        id="carGallery"
        className="flex flex-col md:flex-row justify-center md:w-2/4 m-auto md:flex-wrap p-1 md:p-10"
      >
        <header className="w-full">
          <h1 className="text-lg md:text-4xl text-center m-auto font-bold py-4 mb-5 text-gold">
            --- Catalogue Complet ---
          </h1>
        </header>

      <section className="flex">

        <Filter 
        setSelectedMileage={setSelectedMileage} 
        selectedMileage={selectedMileage} 
        setSelectedPrice={setSelectedPrice} 
        selectedPrice={selectedPrice}
        selectedFuel={selectedFuel}
        setSelectedFuel={setSelectedFuel}
        selectedTransmission={selectedTransmission}
        setSelectedTransmission={setSelectedTransmission}
        reset={reset}
        handleFilter={handleFilter}
        validateSending={validateSending}
        handlePrice={handlePrice}
        />
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
