import React , {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState({})
  // const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    axios
      .get(`http://localhost:5005/api/${id}`)
      .then((res) => {
        console.log(res)
        setCar(res.data);
      })
      .catch((err) => console.log(err));
      // eslint-disable-next-line
  }, []);


  

  return (
    <div>
      
      <img src={car.image} alt={car.make} className='w-10 h-10' />
      <h1>{car.make}</h1>
      <h2>{car.model}</h2>
      <h3>{car.description}</h3>
   </div>
  )
}

export default CarDetails