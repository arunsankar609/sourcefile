import React from 'react'

const HomeCard = ({name,email,phone,id}) => {
  return (
    <div key={id}>
        <div className='border-2 border-cyan-950 w-72 p-2 m-3'>
        <h1>UserName:{name}</h1>
        <p>Email:{email}</p>
        <p>Phone:{phone}</p>
        </div>
        
    </div>
  )
}

export default HomeCard