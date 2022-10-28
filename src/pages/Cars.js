import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Cars = () => {


    const server = "http://localhost:5005"

    const [cars, setCars] = useState([])
    
    const [selectedPrice, setSelectedPrice] = useState(0)
    const [selectedMileage, setSelectedMileage] = useState(0)

    const [make, setMake] = useState("")
    const [price, setPrice] = useState("")
    const [model, setModel] = useState("")
    const [bestDeal, setBestDeal] = useState("")
    const [mileage, setMileage] = useState("")
    const [image, setImage] = useState("")
    const [gearBox, setGearBox] = useState("")
    const [description, setDescription] = useState("")

    const [refresh, setRefresh] = useState(false)


    useEffect( () => {
        axios.get(`${server}/api/cars`)
            .then(response => setCars(response.data))
            .catch(err => console.log(err))
    }, [refresh])


    const handleSelection = (e, check) => {
        console.log(check)
        check === "mileage" ? setSelectedMileage(e.target.value) : setSelectedPrice(e.target.value)
    }

    const handleCarRequest = (e) => {
        e.preventDefault()

        

        console.log("I am trying to get it sent with ", price, image, description)
        const data = new FormData()
            data.append("price", price)
            data.append("image", e.target.image.files)
            data.append("make", make)
            data.append("model", model)
            data.append("bestDeal", bestDeal)
            data.append("gearBox", gearBox)
            data.append("description", description)

        axios.post(`${server}/api/cars`, data)
            .then(response =>  setRefresh(true))
        
       


    }

    return (

    <div>
    
    
  



    <div id="carGallery" className='flex flex-col md:flex-row justify-center md:w-2/4 m-auto md:flex-wrap p-10' >
        <header className='w-full'>
        <h1 className='text-lg md:text-4xl text-center m-auto font-bold py-4 mb-5 text-gold'>---Available Cars---</h1>

          <div className='flex justify-center text-white font-medium text-lg md:text-2xl'>
        
        <label htmlFor="price" className='mr-16'>Price
            <input type="range" name="price" min="0" max="20000" step="500" className='ml-5' onChange={ (e) => handleSelection(e, "price") }/>
            <h2 className='text-center underline text-middle'>{selectedPrice}</h2>
        </label> 

        <label htmlFor="milage">Mileage 
            <input type="range"  name="mileage" min="0" max="200000" step="10000"  className='ml-5' onChange={ (e) => handleSelection(e, "mileage")}/>
            <h2 className='text-center underline text-middle'>{selectedMileage}</h2>

        </label>

    </div>
        </header>
          {cars.map((car) => {
            return <div key={car._id} className="p-10 w-full ">

              <div className="bg-black rounded-lg border border-gray-200 shadow-2xl">
                  <Link to={`/${car._id}`}>
                      <img className="rounded-t-lg" src={car.image[0]} alt={car.name} />
                  </Link>
                  <div className="p-5 text-center">                      
                      <h5 className="text-sm md:text-lg font-bold tracking-tight text-white">{car.name}</h5>
                      <h5 className="text-sm md:text-lg font-bold tracking-tight text-white">car model</h5>      
                      <h5 className="text-xs md:text-base font-bold tracking-tight text-white">€ {car.price}</h5>    
                      <h5 className="text-xs md:text-sm font-bold tracking-tight text-white">{car.transmission}</h5>   
                      <h5 className="text-xs md:text-base font-bold tracking-tight text-white">car description</h5>            
                      <h5 className="text-xs md:text-base font-bold tracking-tight text-white">car mileage</h5> 
                      <p className="mb-3 text-sm md:text-basefont-normal text-white">{car.description}</p>
                      <Link to={`/${car._id}`} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gold rounded-lg hover:bg-gold/90 focus:ring-4 focus:outline-none focus:ring-gold">
                          See more
                          <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      </Link>
                  </div>
              </div>
            </div>
          })}
                 
      </div>

 

    
    </div>

  )
}

export default Cars