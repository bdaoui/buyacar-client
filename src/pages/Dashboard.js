import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Dashboard = () => {
    const server = "http://localhost:5005"

    const [cars, setCars] = useState([])
    const [refresh, setRefresh] = useState(false)


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
    <div>
    Admin Dashboard
    <div className='flex'>

        <section className='w-1/3 border-black border-4'>
            
            <div className='flex justify-center text-center'>
                <h1>Car List</h1>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" /></svg>
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
        </section>

    </div>
    
    </div>
  )
}

export default Dashboard