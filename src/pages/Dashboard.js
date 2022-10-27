import React, { useState, useEffect } from "react";
import axios from "axios";

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
  const [bestDeal, setBestDeal] = useState(false);
  const [transmission, setTransmission] = useState(false);
  const [description, setDescription] = useState("");
  const [engine, setEngine] = useState("");
  const [image, setImage] = useState("");
  
  const [visible, setVisible] = useState("flex");

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
        
        console.log(image)


    const data = new FormData();
    
    Array.from(image).forEach(i => {
         data.append("image", i)
    })
    data.append("price", price);
    data.append("make", make);
    data.append("model", model);
    data.append("bestDeal", bestDeal);
    data.append("transmission", transmission);
    data.append("description", description);
    data.append("mileage", mileage);
    data.append("seats", seats);
    data.append("doors", doors);
    data.append("fuel", fuel);
    data.append("color", color);
    data.append("body", body);
    data.append("engine", engine);

    axios
      .post(`${server}/api/cars`, data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const handleCarEdit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("price", price);
    data.append("image", image);
    data.append("make", make);
    data.append("model", model);
    data.append("bestDeal", bestDeal);
    data.append("transmission", transmission);
    data.append("description", description);
    data.append("mileage", mileage);
    data.append("seats", seats);
    data.append("doors", doors);
    data.append("fuel", fuel);
    data.append("color", color);
    data.append("body", body);
    data.append("engine", engine);

    axios
      .put("{server}/api/cars", data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

    setRefresh(!refresh);
  };

  // Show and Hide based on vector click (+ and x)

  const handleShowNewPostForm = (e) => {
    setSelected("New Post");
    setVisible("hidden");
  };

  const handleCloseSecondSection = (e) => {
    setSelected("");
    setVisible("flex");
  };

  const handleOpenCar = (e) => {
    //open car edit which is literally car form with pre populated fields and a row showing all images maybe carousel

    e.preventDefault()

    const data = new FormData()
    data.append("price", price);
    data.append("image", image);
    data.append("make", make);
    data.append("model", model);
    data.append("bestDeal", bestDeal);
    data.append("transmission", transmission);
    data.append("description", description); 
    data.append("mileage", mileage);
    data.append("seats", seats);
    data.append("doors", doors);
    data.append("fuel", fuel);
    data.append("color", color);
    data.append("body", body);


  } 




  return (
    <div className="h-screen">
      <h1 className="text-center p-5 text-2xl text-emerald-500 font-bold">
        Admin Dashboard
      </h1>

      <div className="flex h-screen">
        <aside
          className={`w-5/6 md:w-2/6 mx-auto lg:m-0 lg:w-1/3 h-screen lg:h-full border-black border-2 px-4 overflow-y-scroll ${visible} md:flex flex-col`}
        >
          <div className="flex justify-center text-center pt-5 gap-6">
            <h1 className="font-bold text-emerald-500 text-xl">Car List</h1>
            <svg
              className="w-6 h-6 cursor-pointer fill-emerald-500 mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              onClick={(e) => handleShowNewPostForm()}
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
                  <section className="w-3/6">
                    <img
                      src={car.image}
                      alt={car.make + " " + car.model}
                      className="w-fit h-fit"
                    />
                  </section>
                  <section className="w-2/6 flex flex-col pl-5 py-1 text-xs md:text-sm lg:text-base">
                    <h2>Volkswagen</h2>
                    <h2>Golf</h2>
                    <h4>€10,000</h4>
                    <h4>Navy</h4>
                    <h4>Auto</h4>
                  </section>
                  <section className="w-1/6">
                  <svg onClick={(e) => handleOpenCar()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-10 mt-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                  </section>
                </div>
              );
            })}
          </div>
        </aside>

        <section
          className={`border-black border-2  m-auto md:m-0 ${
            visible === "hidden" ? "flex" : "hidden"
          } w-5/6 md:w-4/6 md:flex justify-center `}
        >
          {selected === "New Post" && (
            <form
              className="flex  relative flex-wrap justify-center mt-10 rounded"
              onSubmit={handleNewCar}
              enctype="multipart/form-data"
            >
              <div className="w-full">
                <h1 className="text-3xl text-center mb-5"> Upload New Car</h1>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer absolute top-2  md:top-0 right-2 md:right-11"
                  onClick={(e) => handleCloseSecondSection()}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>

              <section className="flex flex-wrap justify-center w-fit">
                <div className="md:w-2/4 flex flex-col px-5">
                  <label for="Name">Price</label>
                  <input
                    type="text"
                    className="border-2 border-emerald-700 mb-5"
                    name="price"
                    onChange={(e) => setPrice(e.target.value)}
                  />

                  <label for="make">Make</label>
                  <input
                    type="text"
                    className="border-2 border-emerald-700 mb-5"
                    name="make"
                    onChange={(e) => setMake(e.target.value)}
                  />

                  <label for="model">Model</label>
                  <input
                    type="text"
                    className="border-2 border-emerald-700 mb-5"
                    name="model"
                    onChange={(e) => setModel(e.target.value)}
                  />


                  <label for="fuel">Fuel</label>
                  <input
                    type="text"
                    className="border-2 border-emerald-700 mb-5"
                    name="fuel"
                    onChange={(e) => setFuel(e.target.value)}
                  />

                  <label for="color">Color</label>
                  <input
                    type="text"
                    className="border-2 border-emerald-700 mb-5"
                    name="color"
                    onChange={(e) => setColor(e.target.value)}
                  />

                  <label for="body">Body</label>
                  <input
                    type="text"
                    className="border-2 border-emerald-700 mb-5"
                    name="body"
                    onChange={(e) => setBody(e.target.value)}
                  />
                </div>

                <div className="md:w-2/4 flex flex-col px-5">
                  <label for="description">Engine Size</label>
                  <input
                    type="text"
                    className="border-2 border-emerald-700 mb-5"
                    name="engine"
                    onChange={(e) => setEngine(e.target.value)}
                  />

                  <label for="description">Mileage</label>
                  <input
                    type="text"
                    className="border-2 border-emerald-700 mb-5"
                    name="mileage"
                    onChange={(e) => setMileage(e.target.value)}
                  />

                  <fieldset className="flex border-2 border-emerald-600 gap-2 p-3 my-2">
                    <legend>Select transmission</legend>
                    <label for="description" value="automatic">Automatic</label>
                    <input
                      type="radio"
                      checked
                      className="border-2 border-emerald-700 "
                      name="transmission"
                      onChange={(e) => setTransmission(true)}
                    />

                    <label for="description" value="manual">Manual</label>
                    <input
                      type="radio"
                      className="border-2 border-emerald-700 "
                      name="transmission"
                      onChange={(e) => setTransmission(false)}
                    />
                  </fieldset>

                  <fieldset className="flex border-2 border-emerald-600 gap-2 p-3">
                    <legend>Is it a BestDeal? </legend>
                    <label for="description">Deal</label>
                    <input
                      type="radio"
                      checked
                      className="border-2 border-emerald-700 "
                      name="bestDeal"
                      onChange={(e) => setBestDeal(true)}
                    />

                    <label for="description">No Deal</label>
                    <input
                      type="radio"
                      className="border-2 border-emerald-700 "
                      name="bestDeal"
                      onChange={(e) => setBestDeal(false)}
                    />
                  </fieldset>

                  <div className="flex flex-col  mt-6 justify-center">
                    <select className="flex border-2 border-emerald-600 gap-2 mb-6 mr-2  "  value={doors} onChange ={ (e) => setDoors( e.target.value) }> 
                      <option defaultValue> Number of Doors</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>

                    </select>

                    <select className="flex border-2 border-emerald-600 gap-2 mr-2 mb-6 " value={seats} onChange ={ (e) => setSeats( e.target.value)}>
                      <option defaultValue> Number of Seats</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                    </select>
                  </div>
                </div>
            

                <div className="flex justify-center items-center w-full mb-5">
                  <label
                    for="dropzone-file"
                    className="flex flex-col justify-center items-center w-3/4 h-32 bg-emerald-500/20 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer p-8"
                  >
                    <div className="flex flex-col justify-center items-center pt-5 pb-6">
                      <svg
                        aria-hidden="true"
                        className="mb-3 w-4 h-4 md:w-10 md:h-10 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p className="mb-2 text-xs md:text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        SVG, PNG, JPG or JPEG
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" name="image" multiple className="hidden"  onChange={ (e) => setImage(e.target.files)}
/>
                  </label>
                </div>
              </section>

              <section className=" flex flex-col w-2/3">
                <label for="description">Description</label>
                <input
                  type="textarea"
                  className=" border-2 border-emerald-700 md:mb-5"
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                />

                <button
                  type="submit"
                  className="bg-emerald-900 rounded w-1/2 md:w-1/4 mt-3 mb-20 m-auto text-white py-2"
                >
                  {" "}
                  Send
                </button>
              </section>
            </form>
          )}
        </section>
      </div>
    </div>
  );
};
export default Dashboard;
