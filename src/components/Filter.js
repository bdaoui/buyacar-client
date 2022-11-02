import React, {useState} from 'react'

const Filter = ({setSelectedMileage, setSelectedPrice, selectedPrice, selectedMileage}) => {

  const handleSelection = (e, check) => {
    console.log(check);
    check === "mileage"
      ? setSelectedMileage(e.target.value)
      : setSelectedPrice(e.target.value);
  };


  return (
    <div>
    <div className="flex justify-center text-white font-medium text-lg md:text-2xl">
            <label htmlFor="price" className="mr-16">
              Prix
              <input
                type="range"
                name="price"
                min="0"
                max="100000"
                step="500"
                className="ml-5"
                onChange={(e) => handleSelection(e, "price")}
              />
              <h2 className="text-center underline text-middle">
                {selectedPrice}
              </h2>
            </label>

            <label htmlFor="milage">
              Kilométrage
              <input
                type="range"
                name="mileage"
                min="0"
                max="250000"
                step="10000"
                className="ml-5"
                onChange={(e) => handleSelection(e, "mileage")}
              />
              <h2 className="text-center underline text-middle">
                {selectedMileage}
              </h2>
            </label>
          </div>
    
    </div>
  )
}

export default Filter