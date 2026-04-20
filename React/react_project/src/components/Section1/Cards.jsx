import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Cards = (props) => {
  return (
    <div className='h-full w-50 overflow-hidden relative'>
        <img src={props.imageUrl} className='h-full w-full rounded-3xl object-cover' alt="" />
        <div className="absolute rounded-3xl inset-0 bg-linear-to-b from-black/10 via-black/50 to-black/60"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between ">
            <h2 className='w-10 h-10 ms-5 mt-5 text-center pt-0.5 font-semibold text-2xl rounded-full bg-white'>{props.id}</h2>
            <div className="w-full h-3/4 flex flex-col justify-around p-5 ">
                <p className=' text-white leading-normal mt-19 text-[15px]'>{props.content}</p>
                <p className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className='bg-blue-700 text-white font-semibold w-2/3 px-auto py-2 rounded-full '>{props.bottomText}</button>
                    <button  className='w-10 h-10 rounded-full font-bold cursor-pointer'> <i className="ri-arrow-right-line  text-white"></i> </button>
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default Cards
