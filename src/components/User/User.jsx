import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-orange-500 text-white text-2xl text-center'>User: {userid}</div>
  )
}

export default User