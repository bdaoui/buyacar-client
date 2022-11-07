import axios from 'axios'
import React, { useEffect, useState } from 'react'

const EditFooter = ({
    refresh,
    setRefresh,
    }) => {
    const [phone, setPhone] = useState(0)
    const server = "https://muddy-moth-top-hat.cyclic.app" ;

    
    useEffect(() => {

        axios.get(`${server}/number`)
        .then(response => setPhone(response.data))
        .catch(err => console.log(err))
    })

    const handleChangeNumber = (e) => {
        e.preventDefault();

        axios.put(`${server}/number`, phone)
            .then(response => console.log(response.data))
            .then(response => setRefresh(!refresh))
            .catch(err => console.log(err))

        
    }


    const handleGoToCarList = () => {
        // This should not just close, but send back to carLis
    }
  
    return (
    <div className='flex flex-col text-white'>
        <section className='flex flex-end'>

        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer text-gold"
            onClick={(e) => handleGoToCarList()}
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
            />
            </svg>
        </section>

        <form onSubmit={(e) => handleChangeNumber(e)} className="flex flex-col">
        <label for="phone"></label>
        <input type="number" defaultValue={phone} name="phone" onChange={e => setPhone(e.target.value)}/>
        <button type='submit'>Envoyer</button>
        </form>

    </div>
  )
}

export default EditFooter