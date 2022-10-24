import React, {useState, useEffect} from 'react'
import axios from 'axios'

const BestOffer = () => {

    const data =  [{
        image: "https://m.atcdn.co.uk/a/media/w800h600/0ca14354a2d340dcb1a989ba871ec80d.jpg",
        name: "Peugeot 308 SW",
        price: "24,746",
        description: "fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque",
        id: 1
      }]

const [bestOffer, setBestOffer] = useState(data)

const server = "" // this will come from redux or contest

useEffect( () => {
    axios.get(`${server}/bestOffer`)
        .then(response => setBestOffer(response.data))
        .catch(err => console.log(err))
}, [])



  return (
    <div className='flex flex-col  justify-center w-2/4 m-auto flex-wrap'>
        <h1 className='font-medium text-lg'>
            BestOffer
        </h1>    

    {bestOffer.map(item => {return <div key={item.id}>
            <h1>{item.name}</h1>
            <img src={item.image} alt={item.name}className='w-20 h-20 md:w-fit md:h-fit' />
            <p>{item.description}</p>
        </div>

    })

    }

    </div>
  )
}

export default BestOffer