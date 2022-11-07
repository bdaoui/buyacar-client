import axios from 'axios'
import React, { useEffect, useState } from 'react'

const EditFooter = ({
    refresh,
    setRefresh,
    handleCloseSecondSection
    }) => {
    const [phone, setPhone] = useState("")
    const server = "https://muddy-moth-top-hat.cyclic.app" ;

    
    useEffect(() => {

        axios.get(`${server}/admin/number`)
        .then(response => {
            setPhone(response.data)})
        .catch(err => console.log(err))
    }, [])

    console.log(typeof phone)

    const handleChangeNumber = (e) => {
        e.preventDefault();

        axios.put(`${server}/admin/number`, phone)
            .then(response => console.log(response.data))
            .then(response => setRefresh(!refresh))
            .catch(err => console.log(err))


        
    }


 
  

    return (
    <div className='flex flex-col text-white'>
        <section className='flex flex-end'>
        
        <div className="w-full flex mt-5">
          <h1 className="text-2xl md:text-3xl text-center mb-5 text-gold">
            {" "}
            Modifier Numero d'Appelle
          </h1>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer mt-2.5 ml-5 text-gold"
            onClick={(e) => handleCloseSecondSection()}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        </section>

        <form onSubmit={(e) => handleChangeNumber(e)} className="flex flex-col">
        <label htmlFor="phone"></label>
        <input type="number" className='text-black rounded-xl' defaultValue={phone} name="phone" onChange={e => setPhone(e.target.value)}/>
        <button
            type="submit"
            className="bg-gold hover:bg-gold/70  rounded w-1/2 md:w-1/4 mt-3 mb-20 m-auto text-white py-2"
          >
           
            Envoyer
          </button>
        </form>

    </div>
  )
}

export default EditFooter