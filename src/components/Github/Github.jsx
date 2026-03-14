import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/shashankmandoli')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white text-4xl rounded-lg shadow-md'>Github followers: {data.followers}
        <div className='flex justify-center'>
            <img className='rounded-full m-4 shadow-md'
            src={data.avatar_url} alt="Github Pfp" width={300}/>
        </div>
    </div>
  )
}

export default Github