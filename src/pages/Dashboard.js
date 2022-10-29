import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const server = "http://localhost:5005";

  const [cars, setCars] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const [selected, setSelected] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [selectedCar, setSelectedCar] = useState("");
  const [selectedCarImage, setSelectedCarImage] = useState("");

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
  const [bestDeal, setBestDeal] = useState("no");
  const [transmission, setTransmission] = useState("automatic");
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

    console.log(image);

    const data = new FormData();

    Array.from(image).forEach((i) => {
      data.append("image", i);
    });
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
      .then((response) => {
        setRefresh(!refresh)
        console.log(response)})
      .catch((err) => console.log(err));
  };

  // Edit Specific Car

  const handleCarEdit = (e, id) => {
    e.preventDefault();

    console.log(id);
    const data = new FormData();
    Array.from(image).forEach((i) => {
      data.append("image", i);
    });
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
      .put(`${server}/api/${id}`, data)
      .then((response) => {
        setRefresh(!refresh)
        console.log(response)})
      .catch((err) => console.log(err));

  };
  
  const handleDelete = () => {
    axios
    .delete(`${server}/api/${selectedId}`)
    .then(res => {
      setRefresh(!refresh)
      console.log(res)})
    .catch(err => console.log(err))
  }

  // Show and Hide based on vector click (+ and x)
  // Handle New Car and Edit visibility

  const handleShowAside = (e, choice, id) => {
    choice === "New Post" ? setSelected("New Post") : setVisible("hidden");
    choice === "Edit" ? setSelected("Edit") : setVisible("hidden");

    setSelectedId(id);

    const chosenCar = cars.filter((car) => car._id === id);
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
{/* New Form */}
        <section
          className={`border-black border-2 m-auto md:m-0 text-black ${
            visible === "hidden" ? "flex" : "hidden"
          } w-5/6 md:w-4/6 md:flex justify-center `}
        >
          {selected === "New Post" && (
            <form
              className="flex  relative flex-wrap justify-center mt-10 rounded"
              onSubmit={handleNewCar}
              encType="multipart/form-data"
            >
              <div className="w-full">
                <h1 className="text-3xl text-center mb-5 text-gold"> Ajouter une Nouvelle Voiture</h1>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer absolute top-2  md:top-0 right-2 md:right-11 text-gold"
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
                  <label htmlFor="Name" className="text-white">Prix</label>
                  <input
                    type="text"
                    className="border-2 border-gold mb-5"
                    name="price"
                    onChange={(e) => setPrice(e.target.value)}
                  />

                  <label htmlFor="make" className="text-white">Marque</label>
                  <input
                    type="text"
                    className="border-2 border-gold mb-5"
                    name="make"
                    onChange={(e) => setMake(e.target.value)}
                  />

                  <label htmlFor="model" className="text-white">Modèle</label>
                  <input
                    type="text"
                    className="border-2 border-gold mb-5"
                    name="model"
                    onChange={(e) => setModel(e.target.value)}
                  />

                  <label htmlFor="fuel" className="text-white">Carburant</label>
                  <input
                    type="text"
                    className="border-2 border-gold mb-5"
                    name="fuel"
                    onChange={(e) => setFuel(e.target.value)}
                  />

                  <label htmlFor="color" className="text-white">Couleur</label>
                  <input
                    type="text"
                    className="border-2 border-gold mb-5"
                    name="color"
                    onChange={(e) => setColor(e.target.value)}
                  />

                  <label htmlFor="body" className="text-white">Type de Véhicule</label>
                  <input
                    type="text"
                    className="border-2 border-gold mb-5"
                    name="body"
                    onChange={(e) => setBody(e.target.value)}
                  />
                </div>

                <div className="md:w-2/4 flex flex-col px-5">
                  <label htmlFor="engine" className="text-white">Moteur</label>
                  <input
                    type="text"
                    className="border-2 border-gold mb-5"
                    name="engine"
                    onChange={(e) => setEngine(e.target.value)}
                  />

                  <label htmlFor="mileage" className="text-white">Kilométrage</label>
                  <input
                    type="text"
                    className="border-2 border-gold mb-5"
                    name="mileage"
                    onChange={(e) => setMileage(e.target.value)}
                  />

                  <fieldset className="flex border-2 border-gold gap-2 p-3 my-2">
                    <legend className="text-white">Choisir Type Boîte de vitesse</legend>
                    <label htmlFor="transmission" className="text-white">Automatique</label>
                    <input
                      type="radio"
                      value="automatic"
                      checked
                      className="border-2 border-gold "
                      name="transmission"
                      onChange={(e) => setTransmission("automatic")}
                    />

                    <label htmlFor="transmission" className="text-white">Manuel</label>
                    <input
                      type="radio"
                      value="manual"
                      className="border-2 border-gold "
                      name="transmission"
                      onChange={(e) => setTransmission("manual")}
                    />
                  </fieldset>

                  <fieldset className="flex border-2 border-gold gap-2 p-3">
                    <legend className="text-white">Bon Plan? </legend>
                    <label htmlFor="bestDeal" className="text-white">No</label>
                    <input
                      type="radio"
                      checked
                      value="no"
                      className="border-2 border-gold "
                      name="bestDeal"
                      onChange={(e) => setBestDeal("no")}
                    />

                    <label htmlFor="bestDeal" className="text-white">Oui</label>
                    <input
                      type="radio"
                      value="yes"
                      className="border-2 border-gold "
                      name="bestDeal"
                      onChange={(e) => setBestDeal("yes")}
                    />
                  </fieldset>

                  <div className="flex flex-col  mt-6 justify-center">
                    <select
                      className="flex border-2 border-gold gap-2 mb-6 mr-2  "
                      value={doors}
                      onChange={(e) => setDoors(e.target.value)}
                    >
                      <option defaultValue> Nombre de Portes</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>

                    <select
                      className="flex border-2 border-gold gap-2 mr-2 mb-6 "
                      value={seats}
                      onChange={(e) => setSeats(e.target.value)}
                    >
                      <option defaultValue> Nombre de Place(s)</option>
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
                    htmlFor="dropzone-file"
                    className="flex flex-col justify-center items-center w-3/4 h-32 bg-gray-300 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer p-8"
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
                        <span className="font-semibold">Click Pour Adjouter Image(s)</span>{" "}
                        ou glisser et déposer
                      </p>
                      <p className="text-xs text-gray-500">
                        SVG, PNG, JPG or JPEG
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      name="image"
                      multiple
                      className="hidden"
                      onChange={(e) => setImage(e.target.files)}
                    />
                  </label>
                </div>
              </section>

              <section className=" flex flex-col w-2/3">
                <label htmlFor="description" className="text-white">Description</label>
                <input
                  type="textarea"
                  className=" border-2 border-gold md:mb-5"
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                />

                <button
                  type="submit"
                  className="bg-gold hover:bg-gold/70  rounded w-1/2 md:w-1/4 mt-3 mb-20 m-auto text-white py-2"
                >
                  {" "}
                  Envoyer
                </button>
              </section>
            </form>
          )}

          {/* Edit Section */}

          {selected === "Edit" && (
            <form
              className="flex  relative flex-wrap justify-center mt-10 rounded"
              onSubmit={(e) => handleCarEdit(e, selectedId)}
              encType="multipart/form-data"
            >
              <div className="w-full">
                <h1 className="text-3xl text-center mb-5 text-gold"> Editer la Fiche Voiture</h1>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer absolute top-2  md:top-0 right-2 md:right-11 text-gold"
                  onClick={(e) => handleCloseSecondSection()}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer absolute top-2  md:top-0 left-2 md:left-11 text-gold"
                  onClick={(e) => handleDelete()}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>

              <section className="flex flex-wrap justify-center w-fit">
                <div className="md:w-2/4 flex flex-col px-5">
                  <label htmlFor="Name" className="text-white">Prix</label>
                  <input
                    type="text"
                    className="border-2 border-gold mb-5"
                    name="price"
                    defaultValue={selectedCar[0]?.price}
                    onChange={(e) => setPrice(e.target.value)}
                  />

                  <label htmlFor="make" className="text-white">Marque</label>
                  <input
                    type="text"
                    className="border-2 border-gold mb-5"
                    name="make"
                    defaultValue={selectedCar[0]?.make}
                    onChange={(e) => setMake(e.target.value)}
                  />

                  <label htmlFor="model" className="text-white">Modèle</label>
                  <input
                    type="text"
                    className="border-2 border-gold mb-5"
                    name="model"
                    defaultValue={selectedCar[0]?.model}
                    onChange={(e) => setModel(e.target.value)}
                  />

                  <label htmlFor="fuel" className="text-white">Carburant</label>
                  <input
                    type="text"
                    className="border-2 border-gold mb-5"
                    name="fuel"
                    defaultValue={selectedCar[0]?.fuel}
                    onChange={(e) => setFuel(e.target.value)}
                  />

                  <label htmlFor="color" className="text-white">Couleur</label>
                  <input
                    type="text"
                    className="border-2 border-gold mb-5"
                    name="color"
                    defaultValue={selectedCar[0]?.color}
                    onChange={(e) => setColor(e.target.value)}
                  />

                  <label htmlFor="body" className="text-white">Type de Véhicule</label>
                  <input
                    type="text"
                    className="border-2 border-gold mb-5"
                    name="body"
                    defaultValue={selectedCar[0]?.body}
                    onChange={(e) => setBody(e.target.value)}
                  />
                </div>

                <div className="md:w-2/4 flex flex-col px-5">
                  <label htmlFor="description" className="text-white">Moteur</label>
                  <input
                    type="text"
                    className="border-2 border-gold mb-5"
                    name="engine"
                    defaultValue={selectedCar[0]?.engine}
                    onChange={(e) => setEngine(e.target.value)}
                  />

                  <label htmlFor="description" className="text-white">Kilométrage</label>
                  <input
                    type="text"
                    className="border-2 border-gold mb-5"
                    name="mileage"
                    defaultValue={selectedCar[0]?.mileage}
                    onChange={(e) => setMileage(e.target.value)}
                  />

                  <fieldset className="flex border-2 border-gold gap-2 p-3 my-2">
                    <legend className="text-white">Choisir Type Boîte de vitesse</legend>
                    <label htmlFor="description" value="automatic" className="text-white">
                    Automatique
                    </label>
                    <input
                      type="radio"
                      defaultChecked={
                        selectedCar[0]?.transmission === "automatic"
                      }
                      className="border-2 border-gold "
                      name="transmission"
                      defaultValue
                      onChange={(e) => setTransmission("automatic")}
                    />

                    <label htmlFor="description" value="manual" className="text-white">
                    Manuel
                    </label>
                    <input
                      type="radio"
                      defaultChecked={selectedCar[0]?.transmission === "manual"}
                      className="border-2 border-gold "
                      name="transmission"
                      onChange={(e) => setTransmission("manual")}
                    />
                  </fieldset>

                  <fieldset className="flex border-2 border-gold gap-2 p-3">
                    <legend className="text-white">Bon Plan? </legend>
                    <label htmlFor="description" className="text-white">No</label>
                    <input
                      type="radio"
                      defaultChecked={selectedCar[0]?.bestDeal === "no"}
                      className="border-2 border-gold "
                      name="bestDeal"
                      onChange={(e) => setBestDeal("no")}
                    />

                    <label htmlFor="description" className="text-white">Oui</label>
                    <input
                      type="radio"
                      defaultChecked={selectedCar[0]?.bestDeal === "yes"}
                      className="border-2 border-gold "
                      name="bestDeal"
                      onChange={(e) => setBestDeal("yes")}
                    />
                  </fieldset>

                  <div className="flex flex-col  mt-6 justify-center">
                    <select
                      className="flex border-2 border-gold gap-2 mb-6 mr-2  "
                      onChange={(e) => setDoors(e.target.value)}
                      defaultValue={selectedCar[0].doors}
                    >
                      <option> Nombre de Portes</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>

                    <select
                      className="flex border-2 border-gold gap-2 mr-2 mb-6 "
                      onChange={(e) => setSeats(e.target.value)}
                      defaultValue={selectedCar[0].doors}
                    >
                      <option> Nombre de Place(s)</option>
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

                <div className="w-full flex flex-col md:flex-row  justify-center ">
                  {selectedCar[0].image.map((image, index) => {
                    return (
                      <img
                        key={index}
                        src={image}
                        alt={selectedCar.model + " " + selectedCar.make}
                        className="p-2 w-fit h-20 m-auto md:m-1"
                      />
                    );
                  })}
                </div>

                <div className="flex justify-center items-center w-full mb-5">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col justify-center items-center w-3/4 h-32 bg-gray-300 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer p-8"
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
                        <span className="font-semibold">Click Pour Adjouter Image(s)</span>{" "}
                        ou glisser et déposer
                      </p>
                      <p className="text-xs text-gray-500">
                        SVG, PNG, JPG or JPEG
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      name="image"
                      multiple
                      className="hidden"
                      onChange={(e) => setImage(e.target.files)}
                    />
                  </label>
                </div>
              </section>

              <section className=" flex flex-col w-2/3">
                <label htmlFor="description" className="text-white">Description</label>
                <input
                  defaultValue={selectedCar[0].description}
                  type="textarea"
                  className=" border-2 border-gold md:mb-5"
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                />

                <button
                  type="submit"
                  className="bg-gold hover:bg-gold/70 rounded w-1/2 md:w-1/4 mt-3 mb-20 m-auto text-white py-2"
                >
                  {" "}
                  Envoyer
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
