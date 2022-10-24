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
//     axios.get(`${server}/bestOffer`)
//         .then(response => setBestOffer(response.data))
//         .catch(err => console.log(err))
// }, [])

      console.log(bestOfferIndex, bestOffer)

  return (

    <div className='w-3/4 flex flex-col align-center justify-center m-auto'>
       
        
            <h1 className='text-center'>{bestOffer[bestOfferIndex].name}</h1>
            <img src={bestOffer[bestOfferIndex].image} alt={bestOffer[bestOfferIndex].name} className='w-fit h-fit' />
            <p className="">{bestOffer[bestOfferIndex].description}</p>

            <div className='flex justify-between'>
                    <button onClick={ (e) => previousBestOffer()}>
                        <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" ></path></svg>
                        
                    </button>

                    <button onClick={ (e) => nextBestOffer()}>
                        <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" ></path></svg>

                    </button>

            </div>

    </div>




  )
}

export default BestOffer