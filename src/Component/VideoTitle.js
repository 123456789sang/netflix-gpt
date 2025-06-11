import React from 'react'
import { FaPlay } from 'react-icons/fa'
const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[10%]  px-24 absolute bg-gradient-to-r from-black'>
        <h1 className='font-bold text-6xl text-white'>{title}</h1>
        <p className='py-6 text-lg w-1/4 text-white'>{overview}</p>
        <button className='bg-white inline-flex items-center   w-40 p-4 px-10 rounded-md text-[14px] hover:bg-gray-300 opacity-90 '>
            <FaPlay size={16} className='text-black mr-2' />
            <span>play</span>   
        </button>
        <button className='bg-gray-500 items-center mb-0 mx-4 px-10 p-4 text-white w-40 rounded-md text-[14px] '><span>More Info</span></button>
    </div>
  ) 
}

export default VideoTitle;