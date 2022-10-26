import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Dashboard = () => {
    const server = ""
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


    }

  return (
    <div>
    Admin Dashboard

    <section></section>
    <section></section>
    
    </div>
  )
}

export default Dashboard