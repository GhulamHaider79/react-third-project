import React, { useEffect, useState } from 'react'





function About() {
    const [data, setData] = useState([])
    useEffect( () =>{
  fetch ('https://api.github.com/users/GhulamHaider79')
  .then(res => res.json())
  .then(data =>{
 console.log(data);
 setData(data)
 
  })
  
  
  
    }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex justify-center items-center gap-12'>

    <img src={data.avatar_url} alt="Git picture" width={300} />
    <h3>Github followers: {data.followers}</h3>
    </div>
  )
}

export default About
