import React, {useState} from 'react'

const Filter = ({setSelectedMileage, setSelectedPrice, selectedPrice, selectedMileage, selectedTransmission, setSelectedTransmission, selectedFuel, setSelectedFuel,  reset}) => {

  const handleSelection = (e, check) => {
    check === "mileage"
      ? setSelectedMileage(e.target.value)
      : setSelectedPrice(e.target.value);
  };



  return (
    <div>
    <div className="flex flex-col md:flex-row justify-center text-white font-medium text-base md:text-2xl">
            <label htmlFor="price" className="md:mr-16">
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

            <label htmlFor='transmisson'> Boite à Vitesse
            <select  
              value={selectedTransmission}
              className='text-black'
              onChange={(e) => setSelectedTransmission(e.target.value)}

            >
            <option value={"Choose"} >Choose</option>
            <option value={"Manuel"} >Manuel</option>
            <option value={"Automatique"} >Automatique</option>
            <option value={"Séquentielle"} >Séquentielle</option>
            </select>
            </label>
            
         
            <label htmlFor='fuel'> Carburant
            <select  
              value={selectedFuel}
              className='text-black'
              onChange={(e) => setSelectedFuel(e.target.value)}

            >
            <option value={"Choose"} >Choose</option>
            <option value={"Essence"} >Essence</option>
            <option value={"Gazole"} >Gazole</option>
            <option value={"Hybride"} >Hybride</option>
            <option value={"Electrique"} >Electrique</option>
            <option value={"Autres"} >Autres</option>
            </select>
            </label>


            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-14 h-14 md: w-10 md:h-10 pl-5 cursor-pointer" onClick={e => reset()  }>
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>


          </div>
    
    </div>
  )
}

export default Filter