import React, { useEffect, useState } from 'react'
import HomeCard from './reusables/HomeCard'
import axios from 'axios'
const Home = () => {
    const[userData,setUserData]=useState(null)
    const getUserData=async()=>{
       await axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
        console.log(res.data)
        setUserData(res.data)
       })
    }

    useEffect(()=>{getUserData()},[])
  return (
    <div className='w-full'>
        <div className='w-full'>
            <img className='w-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk3CjtNjWwDV-7OWdTijSDPAht116z0xpNi-NpTFt0&s'/>
        </div>
        <div className='flex flex-row flex-wrap'>
          {userData?.map((item)=>(<HomeCard name={item.name} email={item.email} phone={item.phone} id={item.id}/>)) }
        </div>
    </div>
  )
}

export default Home