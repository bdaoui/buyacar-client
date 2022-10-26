import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Dashboard = () => {
    const server = "http://localhost:5005"

    const [cars, setCars] = useState([])
    const [refresh, setRefresh] = useState(false)

    const [selected, setSelected] = useState("")

    // Post States

    const [make, setMake] = useState("")
    const [price, setPrice] = useState("")
    const [model, setModel] = useState("")
    const [bestDeal, setBestDeal] = useState("")
    const [mileage, setMileage] = useState("")
    const [image, setImage] = useState("")
    const [gearBox, setGearBox] = useState("")
    const [description, setDescription] = useState("")

    // Retreive Data

    useEffect(() =>{

        axios.get(`${server}/api/cars`)
            .then(response => setCars(response.data))
            .catch(err => console.log(err))
    }, [refresh])

    // Handle New Car  Post

    const handleNewCar = (e) => {
        e.preventDefault()
        
        const data = new FormData()
        data.append("price", price)
        data.append("image", e.target.image.files)
        data.append("make", make)
        data.append("model", model)
        data.append("bestDeal", bestDeal)
        data.append("gearBox", gearBox)
        data.append("description", description)

        axios.post('{server}/api/cars', data)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }


    const handleCarEdit = (e) => {
        e.preventDefault()

        const data = new FormData()
        data.append("price", price)
        data.append("image", e.target.image.files)
        data.append("make", make)
        data.append("model", model)
        data.append("bestDeal", bestDeal)
        data.append("gearBox", gearBox)
        data.append("description", description)

        axios.put('{server}/api/cars', data)
            .then(response => console.log(response))
            .catch(err => console.log(err))

        setRefresh(!refresh)
    }

  return (
    <div className='h-screen'>
        <h1 className='text-center p-5 text-2xl text-emerald-800 font-bold'>
            Admin Dashboard
        </h1>
        
    <div className='flex h-5/6'>

        <section className='w-1/3 border-black border-4 '>
            
            <div className='flex justify-center text-center pt-5 gap-6'>
                <h1 className='font-bold text-emerald-900 text-lg'>Car List</h1>
                <svg className="w-6 h-6 cursor-pointer fill-emerald-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" onClick={(e) => setSelected("New Post")}>
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
            </div>

            <div className='p-5'>
                {cars.map(car => {
                    return<div key={car._id} className='flex p-1 border-b-4 border-emerald-900'>
                        <img src={car.image} alt={car.make+" "+car.model} className="w-15 h-10"/>
                        <h2>{car.make}</h2>
                        <h2>{car.model}</h2>
                        <h2>{car.price}</h2>

                    </div>
                })

                }
            </div>

        </section>

        <section className='w-2/3 border-black border-4'> 

            {selected === "New Post" && 

                <form className='flex  relative flex-wrap justify-center mt-10 rounded' onSubmit={handleNewCar} >
                    <h1 className='text-3xl text-center mb-5'> Upload New Car</h1>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer absolute top-2  md:top-0 right-2 md:right-11" onClick={(e) => setSelected("")} >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>


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
                
                <label for="description">Mileage
                </label>
                <input type='text' className="border-2 border-emerald-700 mb-5" name= 'mileage' onChange={ (e) => setMileage(e.target.value)}/>
                
                <fieldset className='flex border-2 border-emerald-600 gap-2 p-1'>
                    <legend>Select Gearbox</legend>
                    <label for="description">Gearbox
                    </label>
                    <input type='radio' checked className="border-2 border-emerald-700 " name= 'gearbox' onChange={ (e) => setGearBox(e.target.value)}/>
                    
                    <label for="description">No Gearbox
                    </label>
                    <input type='radio' className="border-2 border-emerald-700 " name= 'gearbox' onChange={ (e) => setGearBox(e.target.value)}/>

                </fieldset>

                <fieldset className='flex border-2 border-emerald-600 gap-2 p-1'>
                    <legend>Is it a BestDeal? </legend>
                    <label for="description">BeastDeal
                    </label>
                    <input type='radio' checked className="border-2 border-emerald-700 " name= 'gearbox' onChange={ (e) => setBestDeal(e.target.value)}/>
                    
                    <label for="description">Normal
                    </label>
                    <input type='radio' className="border-2 border-emerald-700 " name= 'gearbox' onChange={ (e) => setBestDeal(e.target.value)}/>

                </fieldset>


        

            </div>

        </section>

        <section  className=' flex flex-col w-screen mx-32 px-5'>
            <label for="description">Description
            </label>
            <input type='textarea' className=" border-2 border-emerald-700 md:mb-5" name= 'description' onChange={ (e) => setDescription(e.target.value)}/>


            <button type='submit' className='bg-emerald-900 rounded w-1/2 md:w-1/4 mt-3 mb-20 m-auto text-white py-2'> Send</button>

        </section>

        </form>

                }
        </section>

    </div>
    
    </div>
  )
}

export default Dashboard