import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Dashboard = () => {
    const server = ""
    const [cars, setCars] = useState([])
    const [refresh, setRefresh] = useState(false)


    useEffect(() =>{

        axios.get(`${server}/cars`)
            .then(response => setCars(response.data))
            .catch(err => console.log(err))
    }, [refresh])


  return (
    <div>
    Admin Dashboard

    <section></section>
    <section></section>
    
    </div>
  )
}

export default Dashboard