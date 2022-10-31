import React, { useState, useEffect } from "react";
import axios from "axios";
import NewCarPost from "../components/NewCarPost";
import EditCarPost from "../components/EditCarPost";

const Dashboard = () => {
  const server = "http://localhost:5005";

  const [cars, setCars] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const [selected, setSelected] = useState("");

  const [selectedId, setSelectedId] = useState("");
  const [selectedCar, setSelectedCar] = useState("");


  const [visible, setVisible] = useState("flex");

  // Retreive Data

  useEffect(() => {
    axios
      .get(`${server}/api/cars`)
      .then((response) => setCars(response.data))
      .catch((err) => console.log(err));
  }, [refresh]);

 
  
  // Show and Hide based on vector click (+ and x)
  // Handle New Car and Edit visibility

  const handleShowAside =  async (e, choice, id) => {
    // Reset Default Value
    await setSelected("")

    choice === "New Post" ? setSelected("New Post") : setVisible("hidden");
    choice === "Edit" ? setSelected("Edit") : setVisible("hidden");

    setSelectedId(id);

    const chosenCar =   cars.filter((car) => car._id === id);
    setSelectedCar(chosenCar);

     setVisible("hidden");


  };

  const handleCloseSecondSection = (e) => {
    setSelected("");
    setVisible("flex");
  };



  return (
    <div className="h-full">
      <h1 className="text-center p-5 text-2xl text-gold font-bold">
        Tableau de Bord
      </h1>

      <div className="flex">
        <aside
          className={`w-5/6 md:w-2/6 mx-auto lg:m-0 lg:w-1/3 h-screen border-black border-2 px-4 overflow-y-scroll ${visible} md:flex flex-col`}
        >
          <div className="flex justify-center text-center pt-5 gap-6">
            <h1 className="font-bold text-gold text-xl">Catalogue</h1>
            <svg
              className="w-6 h-6 cursor-pointer fill-gold mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              onClick={(e) => handleShowAside(e, "New Post")}
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="p-1 lg:p-5 lg:0-2 flex flex-col text-white">
            {cars.map((car) => {
              return (
                <div
                  key={car._id}
                  className="py-2 lg:p-4 border-b-2 border-black/90 flex "
                >
                  <section className="w-3/6">
                    <img
                      src={car.image[0]}
                      alt={car.make + " " + car.model}
                      className="w-fit h-fit"
                    />
                  </section>
                  <section className="w-2/6 flex flex-col pl-5 py-1 text-xs md:text-sm lg:text-base">
                    <h2>{car.make} </h2>
                    <h2>{car.model}</h2>
                    <h4>{"€" + car.price}</h4>
                    <h4>{car.color}</h4>
                    <h4>{car.transmission}</h4>
                  </section>
                  <section className="w-1/6">
                    <svg
                      onClick={(e) => handleShowAside(e, "Edit", car._id)}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 ml-10 mt-10 cursor-pointer text-gold"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </section>
                </div>
              );
            })}
          </div>
        </aside>
          
        <section
          className={`border-black border-2 m-auto md:m-0 text-black ${
            visible === "hidden" ? "flex" : "hidden"
          } w-5/6 md:w-4/6 md:flex justify-center `}
        >
                  {selected === "New Post" && (

          <NewCarPost handleCloseSecondSection={handleCloseSecondSection} refresh={refresh} setRefresh={setRefresh}/>
          )}

          {/* Edit Section */}

          {selected === "Edit" && (
            <EditCarPost handleCloseSecondSection={handleCloseSecondSection} selectedId={selectedId} selectedCar={selectedCar} refresh={refresh} setRefresh={setRefresh}/>
          )}
        </section>
      </div>
    </div>
  );
};
export default Dashboard;
