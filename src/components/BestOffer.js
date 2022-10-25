import React, {useState, useEffect} from 'react'
import axios from 'axios'

const BestOffer = () => {

    const data =  [
        {
        image: "https://m.atcdn.co.uk/a/media/w800h600/0ca14354a2d340dcb1a989ba871ec80d.jpg",
        name: "Peugeot 308 SW",
        price: "24,746",
        description: "fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque",
        id: 1
      },
      {
        image: "https://m.atcdn.co.uk/ect/media/w1224/b7656c050a5843d2a3ced6f7b80632bc.jpg",
        name: "Peugeot 308 SW",
        price: "24,746",
        description: "fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque",
        id: 2
      },
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

// const server = "" // this will come from redux or contest

// useEffect( () => {
//     axios.get(`${server}/api/bestOffer`)
//         .then(response => setBestOffer(response.data))
//         .catch(err => console.log(err))
// }, [])


  return (

    <div className='w-3/4 flex flex-col align-center justify-center m-auto relative'>
       
        
            <h1 className='text-center'>{bestOffer[bestOfferIndex].name}</h1>

            <div className='flex justify-between'>


                    <button onClick={ (e) => previousBestOffer()} className="pr-2" >
                        <svg aria-hidden="true" className="w-5 h-5 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" ></path></svg>
                        
                    </button>
            <img src={bestOffer[bestOfferIndex].image} alt={bestOffer[bestOfferIndex].name} className='w-fit h-fit m-auto' />

                    <button onClick={ (e) => nextBestOffer()} className="pl-2">
                        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" ></path></svg>

                    </button>
            </div>

            <p className="">{bestOffer[bestOfferIndex].description}</p>

    </div>




  )
}

export default BestOffer