import React, {useState} from 'react'

const Filter = ({setSelectedMileage, setSelectedPrice, selectedPrice, selectedMileage, selectedTransmission, setSelectedTransmission, selectedFuel, setSelectedFuel, handleFilter,  reset, validateSending, uniqueMakes, setSelectedMake, selectedMake}) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [closeFilter, setCloseFilter] = useState(false);
  // Fermer

const handleFilterDropdown = (e) => {
  e.preventDefault()
  setFilterOpen(!filterOpen)
  setCloseFilter(!closeFilter)
}


  return (  
  <div className='flex flex-col mx-auto'>
  <section className='w-full flex'>
    <button onClick={(e) => handleFilterDropdown(e)} className="rounded-2xl py-1 px-3 bg-gold my-5 text-white mx-auto text-[0.6rem] md:text-sm">{closeFilter ? 'Fermer' : 'Rechercher'}</button>
  </section>
    
    
    <div className={(filterOpen ? " flex" : " hidden")}>

    <div className="flex w-full flex-col md:flex-row justify-center
       text-white font-medium text-xs sm:text-sm md:text-base text-right mx-10 md:mx-5 lg:mx-20 gap-4
      flex-wrap">
            
            
            <label htmlFor="price" className=" flex justify-end">
              Prix
              <input
                type="range"
                name="price"
                min="0"
                max="100000"
                step="500"
                className="ml-5"
                onChange={ (e) =>  setSelectedPrice( e.target.value)}
                value={selectedPrice}
                
              />
              <h2 className="text-center underline text-middle mx-2">
                {selectedPrice}
              </h2>
            </label>

            <label htmlFor="mileage" className='flex justify-end'>
              Kilométrage
              <input
                type="range"
                name="mileage"
                min="0"
                max="250000"
                step="10000"
                className="ml-5"
                onChange={(e) => setSelectedMileage( e.target.value)}
                value={selectedMileage}

              />
              <h2 className="text-center underline text-middle mx-2">
                {selectedMileage}
              </h2>
            </label>

            <label htmlFor='transmission'> Boite à Vitesse
            <select  
              value={selectedTransmission}
              className='text-black ml-5 rounded-xl mx-2'
              onChange={(e) => setSelectedTransmission(e.target.value)}
              name="transmission"
              
            >
            <option value={"Choose"} >Choose</option>
            <option value={"Manuelle"} >Manuelle</option>
            <option value={"Automatique"} >Automatique</option>
            <option value={"Séquentielle"} >Séquentielle</option>
            </select>
            </label>
            
         
            <label htmlFor='fuel'> Carburant
            <select  
              value={selectedFuel}
              className='text-black ml-5 rounded-xl mx-2'
              onChange={(e) => setSelectedFuel(e.target.value)}
              name="fuel"
            >
            <option value={"Choose"} >Choose</option>
            <option value={"Essence"} >Essence</option>
            <option value={"Gazole"} >Gazole</option>
            <option value={"Hybride"} >Hybride</option>
            <option value={"Electrique"} >Electrique</option>
            <option value={"Autres"} >Autres</option>
            </select>
            </label>
          
            <label htmlFor='make'> Marque

            <select  
              value={selectedMake}
              className='text-black ml-5 rounded-xl mx-2'
              onChange={(e) => setSelectedMake(e.target.value)}
              name="make"
            >
            {uniqueMakes.map( make => 
              <option key={make} value={make}>{make}</option>
            )
            }
            
            </select>
            </label>


            <div className='flex relative justify-end md:justify-center w-full mb-20 '>

            <button
              type="submit"
              className="bg-gold hover:bg-gold/70 w-1/4 md:w-1/2 mt-5 text-white text-xs md:text-lg py-2 rounded-3xl absolute mr-2"
              onClick={e => handleFilter(e)}
            >
              {validateSending || "Envoyer"}
            </button>

            <button className='w-1/3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" stroke="currentColor" 
              className="w-5 h-5 md:w-7 md:h-7 cursor-pointer ml-10 mt-2 absolute top-5 left-2 md:left-3/4 " 
              onClick={e => reset(e)  }>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
            </button>

            </div>

          </div>
     </div>
     </div>
  )
}

export default Filter