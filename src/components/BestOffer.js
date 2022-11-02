import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const BestOffer = () => {

    const data =  [
        {
        image: "https://m.atcdn.co.uk/a/media/w800h600/0ca14354a2d340dcb1a989ba871ec80d.jpg",
        name: "Peugeot 308 SW",
        price: "24,746",
        description: "fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at   ",
        year: "2020",
        transmission: "Automatique",
        fuel: "Diesel",
        mileage: "500000",
        id: 1
      },
      {
        image: "https://m.atcdn.co.uk/ect/media/w1224/b7656c050a5843d2a3ced6f7b80632bc.jpg",
        name: "Peugeot 308 SW",
        price: "24,746",
        description: "fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque",
        year: "1900",
            mileage: "20000000",
            fuel: "Diesel",
            transmission: "Automatique",
        id: 2
      },
        {
            image: "https://m.atcdn.co.uk/a/media/w800h600/0ca14354a2d340dcb1a989ba871ec80d.jpg",
            name: "Peugeot 308 SW",
            description: "fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque",
            price: "24,746",
            year: "1900",
            mileage: "20000000",
            fuel: "Diesel",
            transmission: "Automatique",
            id: 1
          },
          {
            image: "https://m.atcdn.co.uk/ect/media/w1224/b7656c050a5843d2a3ced6f7b80632bc.jpg",
            name: "Peugeot 2008  ",
            description: "fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque",
            price: "24,746",
            year: "1900",
            mileage: "20000000",
            fuel: "Diesel",
            transmission: "Automatique",
            id: 2
          },
          {
            image: "https://m.atcdn.co.uk/ect/media/w1224/130edbc6b0684515b22cf423d2f88693.jpg",
            name: "Volvo XC40 Rechargeugeot 308 SW",
            description: "fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque",
            price: "24,746",
            year: "1900",
            mileage: "20000000",
            fuel: "Diesel",
            transmission: "Automatique",
            id: 3
          },
          {
            image: "https://m.atcdn.co.uk/ect/media/w1224/3520ca655e03439a8b6a3e109f96b4af.jpg",
            name: "Renault Clio",
            description: "fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque",
            price: "24,746",
            year: "1900",
            mileage: "20000000",
            fuel: "Diesel",
            transmission: "Automatique",
            id: 4
          },
          {
            image: "https://m.atcdn.co.uk/a/media/w800h600/0ca14354a2d340dcb1a989ba871ec80d.jpg",
            name: "Mercedes-Benz GLA",
            description: "fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque",
            price: "24,746",
            year: "1900",
            mileage: "20000000",
            fuel: "Diesel",
            transmission: "Automatique",
            id: 5
          },
          {
            image: "https://m.atcdn.co.uk/ect/media/w1224/09cc253defdd49079596830eb120d196.jpg",
            name: "Toyota Corolla",
            description: "fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque",
            price: "24,746",
            year: "1900",
            mileage: "20000000",
            fuel: "Diesel",
            transmission: "Automatique",
            id: 6
          },
          {
            image: "https://m.atcdn.co.uk/ect/media/w1224/6bd0cbcbc1e74b3781d3e355b211cdc9.jpg",
            name: "Mazda CX-30",
            description: "fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque",
            price: "24,746",
            year: "1900",
            mileage: "20000000",
            fuel: "Diesel",
            transmission: "Automatique",
            id: 7
          },
          {
            image: "https://m.atcdn.co.uk/ect/media/w1224/675691b21d5a41e8b7240cd1692c1b4e.jpg",
            name: "Tesla Model Y",
            description: "fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque",
            price: "24,746",
            year: "1900",
            mileage: "20000000",
            fuel: "Diesel",
            transmission: "Automatique",
            id: 8
          }]

      const [bestOffer, setBestOffer] = useState(data)
      const [bestOfferIndex, setBestOfferIndex] = useState(0)



      const nextBestOffer = () => {
        const endArray = bestOffer.length;
        const next = bestOfferIndex+1 === endArray ? 0 : bestOfferIndex+1;
        setBestOfferIndex(next)
        
      }
      
      const previousBestOffer = () => {
        const endArray = bestOffer.length;
        const prev = bestOfferIndex <= 0 ? endArray-1 : bestOfferIndex-1;
        console.log(prev, endArray,bestOfferIndex )
        setBestOfferIndex(prev)
      }



  return (

    <div className='w-4/6 bg-black my-10 py-10 rounded-lg text-white flex flex-col m-auto  drop-shadow-2xl ' id="bestOffer" >
       
       <header className='text-lg md:text-4xl text-center m-auto font-bold w-2/4 text-gold ' id="bonPlans">--- Bons Plans ---</header>

        <section className='text-center my-4 md:my-10 w-2/4 m-auto drop-shadow-xl'>
            <h1 className='text-base md:text-2xl'>{bestOffer[bestOfferIndex].name}</h1>
        </section>

            <section className='flex md:px-28'>

                    <button onClick={ (e) => previousBestOffer()} className="pr-2" >
                        <svg aria-hidden="true" className="w-5 h-5 md:w-10 md:h-10 text-gold " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" ></path></svg>    
                    </button>
            <img src={bestOffer[bestOfferIndex].image} alt={bestOffer[bestOfferIndex].name} className='object-scale-down h-52 w-3/4 lg:w-fit md:h-96 m-auto drop-shadow-2xl rounded-xl' />

                    <button onClick={ (e) => nextBestOffer()} className="pl-2">
                        <svg aria-hidden="true" className="w-5 h-5 md:w-10 md:h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" ></path></svg>
                    </button>
            </section>
            
            <section className='flex flex-col justify-center mt-5 gap-2'>
            <h1 className='text-base md:text-xl text-center'>€ {bestOffer[bestOfferIndex].price} </h1>
            
            <div className='flex flex-col md:flex-row justify-center mt-5 gap-2'>
              
              <section className='p-2 md:border-r-white md:border-r-2 flex flex-col text-center'>
              <h1 className='text-base font-light md:text-xl text-gold'>Année </h1>
              <h1 className='text-base md:text-xl'>{bestOffer[bestOfferIndex].year} </h1>
              </section>

              <section className='p-2 md:border-r-white md:border-r-2 text-center'>
              <h1 className='text-base md:text-xl font-light text-gold'>Kilométrage </h1>
              <h1 className='text-base md:text-xl'>{bestOffer[bestOfferIndex].mileage} </h1>
              </section>

              <section className='p-2 md:border-r-white md:border-r-2 text-center'>
              <h1 className='text-base md:text-xl font-light text-gold'>Carburant  </h1>
              <h1 className='text-base md:text-xl'> {bestOffer[bestOfferIndex].fuel} </h1>
              </section>

              <section className='p-2 text-center'>
              <h1 className='text-base md:text-xl font-light text-gold '>Boite de Vitesse </h1>
              
              <h1 className='text-base md:text-xl'>{bestOffer[bestOfferIndex].transmission} </h1>
              </section>

            </div>
      

            </section>

            <p className="text-sm md:text-lg p-10 xl:px-72">{bestOffer[bestOfferIndex].description}</p>

            <Link to={`http://localhost:5005/api/${bestOfferIndex}`} className='text-center'>
              <button className='bg-gold p-3 px-5 rounded-lg'>VOIR PLUS</button>
            </Link>
        
    </div>




  )
}

export default BestOffer