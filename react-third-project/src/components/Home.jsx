import React from 'react'
import myPic from '../assets/myPic.png'

function Home() {
  return (
    <div className='flex pt-14'>
        <div className='flex justify-center px-8'>
        <img className='w-96' src={myPic} alt="" />
      </div>
      <div className='flex flex-col gap-3 w-[60%] p-12'>
        <h1 className='text-3xl font-bold'>Ghulam Haider</h1>
        <h3 className='text-3xl'>Web And Mobile App Developer</h3>
        <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Tempore provident quo earum voluptatem distinctio reprehenderit
         praesentium dolorum iure perspiciatis voluptates illum blanditiis 
         optio eaque mollitia, iste cupiditate tenetur quisquam facere?</p>
      </div>
      
    </div>
  )
}

export default Home
