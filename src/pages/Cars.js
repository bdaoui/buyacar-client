import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Cars = () => {

    const data = [ 
        {
          image: "https://m.atcdn.co.uk/a/media/w800h600/0ca14354a2d340dcb1a989ba871ec80d.jpg",
          name: "Peugeot 308 SW",
          price: "24,746",
          id: 1
        },
        {
          image: "https://m.atcdn.co.uk/ect/media/w1224/b7656c050a5843d2a3ced6f7b80632bc.jpg",
          name: "Peugeot 2008  ",
          price: "24,746",
          id: 2
        },
        {
          image: "https://m.atcdn.co.uk/ect/media/w1224/130edbc6b0684515b22cf423d2f88693.jpg",
          name: "Volvo XC40 Rechargeugeot 308 SW",
          price: "24,746",
          id: 3
        },
        {
          image: "https://m.atcdn.co.uk/ect/media/w1224/3520ca655e03439a8b6a3e109f96b4af.jpg",
          name: "Renault Clio",
          price: "24,746",
          id: 4
        },
        {
          image: "https://m.atcdn.co.uk/a/media/w800h600/0ca14354a2d340dcb1a989ba871ec80d.jpg",
          name: "Mercedes-Benz GLA",
          price: "24,746",
          id: 5
        },
        {
          image: "https://m.atcdn.co.uk/ect/media/w1224/09cc253defdd49079596830eb120d196.jpg",
          name: "Toyota Corolla",
          price: "24,746",
          id: 6
        },
        {
          image: "https://m.atcdn.co.uk/ect/media/w1224/6bd0cbcbc1e74b3781d3e355b211cdc9.jpg",
          name: "Mazda CX-30",
          price: "24,746",
          id: 7
        },
        {
          image: "https://m.atcdn.co.uk/ect/media/w1224/675691b21d5a41e8b7240cd1692c1b4e.jpg",
          name: "Tesla Model Y",
          price: "24,746",
          id: 8
        }
        
      ]

    const server = "http://localhost:5005"

    const [cars, setCars] = useState(data)
    
    const [selectedPrice, setSelectedPrice] = useState(0)
    const [selectedMileage, setSelectedMileage] = useState(0)

    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [description, setdescription] = useState("")

    useEffect( () => {
        axios.get(`${server}/api/cars`)
            .then(response => setCars(response.data))
            .catch(err => console.log(err))
    }, [])


    const handleSelection = (e, check) => {
        console.log(check)
        check === "mileage" ? setSelectedMileage(e.target.value) : setSelectedPrice(e.target.value)
    }

    const handleCarRequest = (e) => {
        e.preventDefault()

        const data = new FormData()
            data.append("price", price)
            data.append("image", image)
            data.append("description", description)

        axios.post('/cars')
            .then(response => setCars(...cars, response))

    }

    return (

    <div>
    
    <h1 className='text-center text-4xl m-10' > Available Cars</h1>
    
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
    


    {cars.map(car => {return <div key={car._id}>
            <h1>{car.name}</h1>
            <img src={car.image} alt={car.name} />
            <p>{car.details}</p>
        </div>
    })
    }

    {
        <form className='flex flex-col w-1/4 m-auto justify-center mt-10 rounded' onSubmit={handleCarRequest} >

            <label for="Name">Name</label>
            <input type='text' className='border-2 border-black mb-5' name="name"/>
            <label for="description">Description</label>
            <input type='text' className="border-2 border-black mb-5" name= 'description' />
            <label for="image" >Image</label>
            <input type='file' name="image" />     
                   
        </form>

     }

    
    </div>

  )
}

export default Cars