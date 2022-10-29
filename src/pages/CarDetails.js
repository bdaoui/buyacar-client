import React , {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState({})
  //const [refresh, setRefresh] = useState(false)

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
    <div className='text-white h-full w-full'>
      <header className='flex justify-center my-20 font-bold text-gold text-2xl md:text-4xl'>
        View our {car?.make}{" "}{car?.model}
      </header>

      <section className='flex flex-col lg:flex-row w-screen h-full'>
      
          <div className='w-full lg:w-2/4'>  
          
          {car?.image?.map((i, index) => {
            return <div key={index}>
            <img src={i} alt={i?.make} className='flex justify-center mx-auto mb-10 md:mb-20 px-10' />
            </div>
          })}
          </div>

          <div className='w-full lg:w-2/4 h-screen text-base flex flex-col lg:flex-row gap-5 lg:gap-20'>
            <section className='flex flex-col gap-y-5 lg:gap-y-10 text-center lg:text-left'>
              <p>Marque: <span className='italic text-gold'>{car?.make}</span></p>
              <p>Modèle: <span className='italic text-gold'>{car?.model}</span></p>
              <p>€ <span className='italic text-gold'>{car?.price}</span></p>
              <p>Kilométrage: <span className='italic text-gold'>{car?.mileage}</span></p>
              <p>Couleurs: <span className='italic text-gold'>{car?.color}</span></p>
              <p>Carburant: <span className='italic text-gold'>{car?.fuel}</span></p>
            </section>

            <section className='flex flex-col gap-y-5 lg:gap-y-10 text-center lg:text-left'>
              <p>Boîte de vitesse: <span className='italic text-gold'>{car?.transmission}</span></p>
              <p>Engine Size: <span className='italic text-gold'>{car?.engine}L</span></p>
              <p>Doors: <span className='italic text-gold'>{car?.doors}</span></p>
              <p>Seats: <span className='italic text-gold'>{car?.seats}</span></p>
            </section>

            <section className='flex flex-col h-full gap-y-5 lg:gap-y-10 text-center mx-20 lg:text-left'>
              Description: <span className='italic text-gold'>{car?.description}</span>
            </section>

          </div> 
           
        
      </section>
   </div>
  )
}

export default CarDetails