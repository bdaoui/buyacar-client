import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Cars = () => {

    // const data = [ 
    //     {
    //       image: "https://m.atcdn.co.uk/a/media/w800h600/0ca14354a2d340dcb1a989ba871ec80d.jpg",
    //       name: "Peugeot 308 SW",
    //       price: "24,746",
    //       id: 1
    //     },
    //     {
    //       image: "https://m.atcdn.co.uk/ect/media/w1224/b7656c050a5843d2a3ced6f7b80632bc.jpg",
    //       name: "Peugeot 2008  ",
    //       price: "24,746",
    //       id: 2
    //     },
    //     {
    //       image: "https://m.atcdn.co.uk/ect/media/w1224/130edbc6b0684515b22cf423d2f88693.jpg",
    //       name: "Volvo XC40 Rechargeugeot 308 SW",
    //       price: "24,746",
    //       id: 3
    //     },
    //     {
    //       image: "https://m.atcdn.co.uk/ect/media/w1224/3520ca655e03439a8b6a3e109f96b4af.jpg",
    //       name: "Renault Clio",
    //       price: "24,746",
    //       id: 4
    //     },
    //     {
    //       image: "https://m.atcdn.co.uk/a/media/w800h600/0ca14354a2d340dcb1a989ba871ec80d.jpg",
    //       name: "Mercedes-Benz GLA",
    //       price: "24,746",
    //       id: 5
    //     },
    //     {
    //       image: "https://m.atcdn.co.uk/ect/media/w1224/09cc253defdd49079596830eb120d196.jpg",
    //       name: "Toyota Corolla",
    //       price: "24,746",
    //       id: 6
    //     },
    //     {
    //       image: "https://m.atcdn.co.uk/ect/media/w1224/6bd0cbcbc1e74b3781d3e355b211cdc9.jpg",
    //       name: "Mazda CX-30",
    //       price: "24,746",
    //       id: 7
    //     },
    //     {
    //       image: "https://m.atcdn.co.uk/ect/media/w1224/675691b21d5a41e8b7240cd1692c1b4e.jpg",
    //       name: "Tesla Model Y",
    //       price: "24,746",
    //       id: 8
    //     }
        
    //   ]

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
          <h1 className='text-lg md:text-4xl text-center m-auto font-bold py-4 text-emerald-900 underline'>Available Cars</h1>

          <div className='flex justify-center'>
        
        <label for="price" className='mr-16 font-medium text-2xl'>Price
            <input type="range" name="price" min="0" max="20000" step="500" className='ml-5' onChange={ (e) => handleSelection(e, "price") }/>
            <h2 className='text-center underline text-middle'>{selectedPrice}</h2>
        </label> 

        <label for="milage" className='font-medium text-2xl' >Mileage 
            <input type="range"  name="mileage" min="0" max="200000" step="10000"  className='ml-5' onChange={ (e) => handleSelection(e, "mileage")}/>
            <h2 className='text-center underline text-middle'>{selectedMileage}</h2>

        </label>

    </div>
        </header>
          {cars.map((car) => {
            return <div key={car._id} className="p-10 w-full ">

              <div className="bg-emerald-500 rounded-lg border border-gray-200 shadow-2xl">
                  <Link to="">
                      <img className="rounded-t-lg" src={car.image} alt={car.name} />
                  </Link>
                  <div className="p-5 text-center">                      
                      <h5 className="text-sm md:text-lg font-bold tracking-tight text-white">{car.name}</h5>
                      <h5 className="text-sm md:text-lg font-bold tracking-tight text-white">car model</h5>      
                      <h5 className="text-xs md:text-base font-bold tracking-tight text-white">€ {car.price}</h5>    
                      <h5 className="text-xs md:text-sm font-bold tracking-tight text-white">{car.transmission}</h5>   
                      <h5 className="text-xs md:text-base font-bold tracking-tight text-white">car description</h5>            
                      <h5 className="text-xs md:text-base font-bold tracking-tight text-white">car mileage</h5> 
                      <p className="mb-3 text-sm md:text-basefont-normal text-white">{car.description}</p>
                      <Link to='' className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300">
                          See more
                          <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </Link>
                  </div>
              </div>
            </div>
          })}
                 
      </div>

    {
        <form className='flex  flex-wrap justify-center mt-10 rounded' onSubmit={handleCarRequest} >
        <h1 className='text-3xl text-center mb-5'> Upload New Car</h1>

        <section  className='flex flex-wrap justify-center w-screen mx-32' >
            <div className='w-2/4 flex flex-col px-5'> 
            
                <label for="Name">Price
                </label>
                <input type='text' className='border-2 border-emerald-700 mb-5' name="price"  onChange={ (e) => setPrice(e.target.value)}/>


                <label for="model">Model
                </label>
                <input type='text' className="border-2 border-emerald-700 mb-5" name= 'model' onChange={ (e) => setModel(e.target.value)}/>
           
                <label for="image" className='w-3/4 '>Image
                <input type='file' multiple name="image" />     
                </label>
                
            </div>

            <div className='w-2/4 flex flex-col'>
                <label for="description">Gearbox
                </label>
                <input type='text' className="border-2 border-emerald-700 mb-5" name= 'gearbox' onChange={ (e) => setGearBox(e.target.value)}/>

                <label for="description">Mileage
                </label>
                <input type='text' className="border-2 border-emerald-700 mb-5" name= 'mileage' onChange={ (e) => setMileage(e.target.value)}/>

                <label for="description">BestDeal
                </label>
                <input type='text' className="border-2 border-emerald-700 mb-5" name= 'bestDeal' onChange={ (e) => setBestDeal(e.target.value)}/>


            </div>

        </section>

        <section  className=' flex flex-col w-screen mx-32 px-5'>
            <label for="description">Description
            </label>
            <input type='textarea' className=" border-2 border-emerald-700 md:mb-5" name= 'description' onChange={ (e) => setDescription(e.target.value)}/>


            <button type='submit' className='bg-emerald-500 rounded w-1/2 md:w-1/4 mt-3 mb-20 m-auto text-white py-2'> Send</button>

        </section>

        </form>

     }

    
    </div>

  )
}

export default Cars