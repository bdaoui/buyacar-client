import React from 'react'

const EditCarPostLG = ({handleCarEdit, selectedId, filteredCar, setPrice, setMake, setFuel, setColor, setBestDeal, setBody, setDoors, setEngine, setMileage, setYear, setTransmission,setSeats, handleAllImageDelete, imageIndex, handleImageDelete, previousImage, nextImage, setImage, setModel, setDescription, validateSending}) => {
  return (
    <form
    className="flex relative flex-wrap justify-center mt-10 rounded"
    onSubmit={(e) => handleCarEdit(e, selectedId)}
    encType="multipart/form-data"
  >

    <section className="flex flex-wrap justify-center w-full">
      <div className="w-full md:w-2/4 flex flex-col px-5 mb-5">
        <label htmlFor="Name" className="text-white">
          Prix
        </label>
        <input
          type="text"
          className="border-2 border-gold mb-5"
          name="price"
          defaultValue={filteredCar[0]?.price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label htmlFor="make" className="text-white">
          Marque
        </label>
        <input
          type="text"
          className="border-2 border-gold mb-5"
          name="make"
          defaultValue={filteredCar[0]?.make}
          onChange={(e) => setMake(e.target.value)}
        />

        <label htmlFor="model" className="text-white">
          Modèle
        </label>
        <input
          type="text"
          className="border-2 border-gold mb-5"
          name="model"
          defaultValue={filteredCar[0]?.model}
          onChange={(e) => setModel(e.target.value)}
        />

        <label htmlFor="fuel" className="text-white">
          Carburant
        </label>
        <input
          type="text"
          className="border-2 border-gold mb-5"
          name="fuel"
          defaultValue={filteredCar[0]?.fuel}
          onChange={(e) => setFuel(e.target.value)}
        />

        <label htmlFor="color" className="text-white">
          Couleur
        </label>
        <input
          type="text"
          className="border-2 border-gold mb-5"
          name="color"
          defaultValue={filteredCar[0]?.color}
          onChange={(e) => setColor(e.target.value)}
        />

        <label htmlFor="body" className="text-white">
          Type de Véhicule
        </label>
        <input
          type="text"
          className="border-2 border-gold mb-5"
          name="body"
          defaultValue={filteredCar[0]?.body}
          onChange={(e) => setBody(e.target.value)}
        />

        <select
          className="flex border-2 border-gold my-4 "
          defaultValue={filteredCar[0]?.doors}
          onChange={(e) => setDoors(e.target.value)}
        >
          <option defaultValue> Nombre de Portes</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <div className="w-full md:w-2/4 flex flex-col px-5 mb-5">
        <label htmlFor="description" className="text-white">
          Moteur
        </label>
        <input
          type="text"
          className="border-2 border-gold mb-5"
          name="engine"
          defaultValue={filteredCar[0]?.engine}
          onChange={(e) => setEngine(e.target.value)}
        />

        <label htmlFor="description" className="text-white">
          Kilométrage
        </label>
        <input
          type="text"
          className="border-2 border-gold mb-5"
          name="mileage"
          defaultValue={filteredCar[0]?.mileage}
          onChange={(e) => setMileage(e.target.value)}
        />

        <label htmlFor="year" className="text-white">
          Anneé
        </label>
        <input
          type="text"
          className="border-2 border-gold mb-5"
          name="year"
          defaultValue={filteredCar[0]?.year}
          onChange={(e) => setYear(e.target.value)}
        />

        <fieldset className="flex border-2 border-gold gap-2 p-3 my-2">
          <legend className="text-white">
            Choisir Type Boîte de vitesse
          </legend>
          <label
            htmlFor="description"
            value="automatic"
            className="text-white"
          >
            Automatique
          </label>
          <input
            type="radio"
            defaultChecked={filteredCar[0]?.transmission === "automatic"}
            className="border-2 border-gold "
            name="transmission"
            defaultValue
            onChange={(e) => setTransmission("automatic")}
          />

          <label
            htmlFor="description"
            value="manual"
            className="text-white"
          >
            Manuel
          </label>
          <input
            type="radio"
            defaultChecked={filteredCar[0]?.transmission === "manual"}
            className="border-2 border-gold "
            name="transmission"
            onChange={(e) => setTransmission("manual")}
          />
        </fieldset>

        <fieldset className="flex border-2 border-gold gap-2 p-3">
          <legend className="text-white">Bon Plan? </legend>
          <label htmlFor="description" className="text-white">
            No
          </label>
          <input
            type="radio"
            defaultChecked={filteredCar[0]?.bestDeal === "no"}
            className="border-2 border-gold "
            name="bestDeal"
            onChange={(e) => setBestDeal("no")}
          />

          <label htmlFor="description" className="text-white">
            Oui
          </label>
          <input
            type="radio"
            defaultChecked={filteredCar[0]?.bestDeal === "yes"}
            className="border-2 border-gold "
            name="bestDeal"
            onChange={(e) => setBestDeal("yes")}
          />
        </fieldset>

        <select
          className="flex border-2 border-gold gap-2 my-4"
          onChange={(e) => setSeats(e.target.value)}
          defaultValue={filteredCar[0]?.seats}
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

      <div className="w-full md:w-2/4 flex flex-col md:flex-row justify-center flex-wrap">
        
        
          <section className="flex justify-center mb-3 text-center w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-7 mr-1 cursor-pointer  right-28 text-red-800"
            onClick={(e) =>
              handleAllImageDelete(e)
            }
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>
          <p className="text-gold  right-4 font-semibold text-lg cursor-pointer"  onClick={(e) =>handleAllImageDelete(e)}>DELETE ALL</p>
          </section>
        
        
        
        
        
        
        <div className="relative ">
          {filteredCar[0].image[imageIndex] && (
            <section className="flex">
              <img
                src={filteredCar[0]?.image[imageIndex]}
                alt={filteredCar.model + " " + filteredCar.make}
                className=" w-fit h-40 md:h-60 m-auto md:m-1"
              />
            </section>
          )}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="w-5 h-5 cursor-pointer absolute top-0 md:top-1 left-16 md:left-1  bg-white text-red-900"
            onClick={(e) =>
              handleImageDelete(e, filteredCar[0]?.image[imageIndex])
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>

          <section className="flex justify-center p-5">
            <button onClick={(e) => previousImage(e)} className="pr-2">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gold "
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

            <p className="text-white">
              {imageIndex + 1} / {filteredCar[0].image.length}
            </p>

            <button onClick={(e) => nextImage(e)} className="pl-2">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gold"
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
          
          </section>

        </div>
      </div>

      <div className="flex justify-center items-center w-full md:w-2/4 mb-5">
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
              <span className="font-semibold">
                Click Pour Adjouter Image(s)
              </span>{" "}
              ou glisser et déposer
            </p>
            <p className="text-xs text-gray-500">SVG, PNG, JPG or JPEG</p>
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

    <section className=" flex flex-col w-full px-5 md:w-2/4">
      <label htmlFor="description" className="text-white">
        Description
      </label>
      <textarea
        defaultValue={filteredCar[0]?.description}
        type="text"
        className=" border-2 border-gold md:mb-5 h-20"
        name="description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        type="submit"
        className="bg-gold hover:bg-gold/70 rounded w-1/2 md:w-1/4 mt-3 mb-20 m-auto text-white py-2"
      >
      {validateSending || "Envoyer"}
      </button>
    </section>
  </form>
  )
}

export default EditCarPostLG