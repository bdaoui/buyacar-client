import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const server = "http://localhost:5005";

  const [cars, setCars] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const [selected, setSelected] = useState("");

  // Post States

  const [make, setMake] = useState(""); 
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [mileage, setMileage] = useState("");
  const [color, setColor] = useState("");
  const [fuel, setFuel] = useState("");
  const [seats, setSeats] = useState("");
  const [doors, setDoors] = useState("");
  const [body, setBody] = useState("");
  
 const [bestDeal, setBestDeal] = useState("");
  
  const [image, setImage] = useState("");
  const [gearBox, setGearBox] = useState("");
  const [description, setDescription] = useState("");

  // Retreive Data

  useEffect(() => {
    axios
      .get(`${server}/api/cars`)
      .then((response) => setCars(response.data))
      .catch((err) => console.log(err));
  }, [refresh]);

  // Handle New Car  Post

  const handleNewCar = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("price", price);
    data.append("image", e.target.image.files);
    data.append("make", make);
    data.append("model", model);
    data.append("bestDeal", bestDeal);
    data.append("gearBox", gearBox);
    data.append("description", description);

    axios
      .post("{server}/api/cars", data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const handleCarEdit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("price", price);
    data.append("image", e.target.image.files);
    data.append("make", make);
    data.append("model", model);
    data.append("bestDeal", bestDeal);
    data.append("gearBox", gearBox);
    data.append("description", description);

    axios
      .put("{server}/api/cars", data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

    setRefresh(!refresh);
  };

  return (
    <div className="h-screen">
      <h1 className="text-center p-5 text-2xl text-emerald-500 font-bold">
        Admin Dashboard
      </h1>
    
    {/* parent div to entire dashboard below writing */}
      <div className="flex flex-col lg:flex-row h-full lg:h-5/6 ">
        
    {/* left side dashboard */}
        <aside className="w-5/6 mx-auto lg:m-0 lg:w-1/3 h-screen lg:h-full border-black border-2 px-4 overflow-y-scroll">
          <div className="flex justify-center text-center pt-5 gap-6">
            <h1 className="font-bold text-emerald-900 text-lg">Car List</h1>
            <svg
              className="w-6 h-6 cursor-pointer fill-emerald-900"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              onClick={(e) => setSelected("New Post")}
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="p-1 lg:p-5 lg:0-2 flex flex-col">
            {cars.map((car) => {
              return (
               
                <div
                  key={car._id}
                  className="py-2 lg:p-4 border-b-2 border-emerald-500 flex "
                >
                
                <section className="w-fit h-fit pr-5">
                  <img
                    src={car.image}
                    alt={car.make + " " + car.model}
                    className="w-fit h-fit"
                  />
                </section>
                <section className="flex flex-col py-1">
                  <h2>car make and name</h2>
                  <h4>€ price</h4>
                  <h4>car color</h4>
                  <h4>car transmission</h4>
                </section>
                
                </div>
              );
            })}
          </div>
        </aside>
    {/* main dashboard */}
        <section className="w-5/6 mx-auto lg:m-0 lg:w-2/3 h-screen lg:h-full border-black border-2 px-4 overflow-y-scroll lg:overflow-y-hidden">
          {selected === "New Post" && (
            <form
              className="flex flex-col justify-center mt-10 rounded"
              onSubmit={handleNewCar}
            >
            <header className="flex justify-center">
              <h1 className="text-3xl text-center mb-10 mr-10"> Upload New Car</h1>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer mt-2"
                onClick={(e) => setSelected("")}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </header>

            <section className="flex flex-col justify-center mx-auto w-fit">

            <div className="w-full flex flex-col lg:flex-row mx-auto px-5">
                <label for="Name">Price</label>
                <input
                type="text"
                className="border-2 border-emerald-700 mx-2 mb-5"
                name="price"
                onChange={(e) => setPrice(e.target.value)}
                />
                
                <label for="Name">Make</label>
                <input
                type="text"
                className="border-2 border-emerald-700 mx-2 mb-5"
                name="make"
                onChange={(e) => setMake(e.target.value)}
                />

                <label for="model">Model</label>
                <input
                type="text"
                className="border-2 border-emerald-700 mx-2 mb-5"
                name="model"
                onChange={(e) => setModel(e.target.value)}
                />
            </div>


                <label for="image" className="w-3/4 mx-auto my-5 px-2 flex justify-center ">
                    Image 
                    <input type="file" multiple name="image" className="px-2" />
                </label>
            
            <div className="w-full flex flex-col lg:flex-row mx-auto px-5">
                <label for="Name">Mileage</label>
                <input
                type="text"
                className="border-2 border-emerald-700 mx-2 mb-5"
                name="mileage"
                onChange={(e) => setMileage(e.target.value)}
                />
                
                <label for="Name">Color</label>
                <input
                type="text"
                className="border-2 border-emerald-700 mx-2 mb-5"
                name="color"
                onChange={(e) => setColor(e.target.value)}
                />

                <label for="model">Body</label>
                <input
                type="text"
                className="border-2 border-emerald-700 mx-2 mb-5"
                name="body"
                onChange={(e) => setBody(e.target.value)}
                />
               
            </div>

            <div className="w-full flex flex-col lg:flex-row mx-auto px-5">
                <label for="seats">Seats</label>
                <select name="seats" id="seats">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>
                
                <label for="seats">Doors</label>
                <select name="doors" id="doors">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <label for="fuel">Fuel</label>
                <select name="fuel" id="fuel">
                    <option value="petrol">Petrol</option>
                    <option value="diesel">Diesel</option>
                    <option value="electric">Electric</option>
                    <option value="hybrid">Hybrid</option>
                </select>

            </div>

            <div className="w-full flex flex-col mx-auto px-5 py-2">

                <fieldset className="flex border-2 border-emerald-600 gap-2 p-1 mb-2">
                <legend>Select Gearbox</legend>
                <label for="description">Automatic</label>
                <input
                    type="radio"
                    checked
                    className="border-2 border-emerald-700 "
                    name="gearbox"
                    onChange={(e) => setGearBox(e.target.value)}
                />

                <label for="description">Manual</label>
                <input
                    type="radio"
                    className="border-2 border-emerald-700 "
                    name="gearbox"
                    onChange={(e) => setGearBox(e.target.value)}
                />
                </fieldset>

                <fieldset className="flex border-2 border-emerald-600 gap-2 p-1">
                <legend>Is it a BestDeal? </legend>
                <label for="description">BestDeal</label>
                <input
                    type="radio"
                    checked
                    className="border-2 border-emerald-700 "
                    name="gearbox"
                    onChange={(e) => setBestDeal(e.target.value)}
                />

                <label for="description">Normal</label>
                <input
                    type="radio"
                    className="border-2 border-emerald-700 "
                    name="gearbox"
                    onChange={(e) => setBestDeal(e.target.value)}
                />
                </fieldset>
            </div>
            </section>

              <section className="w-2/4 mx-auto flex flex-col px-5">
                <label for="description">Description</label>
                <textarea
                  type="textarea"
                  className=" border-2 border-emerald-700 md:mb-5"
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                />
            </section>
                <button
                  type="submit"
                  className="bg-emerald-900 rounded w-1/2 md:w-1/4 mt-3 mb-20 m-auto text-white py-2"
                >
                  {" "}
                  Send
                </button>
              
            </form>
          )}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
