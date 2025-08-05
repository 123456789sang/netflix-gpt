import React from 'react';
import { FaPlay } from 'react-icons/fa';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" px-4 md:px-12 lg:px-24 py-6 md:pt-[14%] absolute bg-gradient-to-r from-black/50 to-transparent text-white ">
      <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl max-w-[90%] md:max-w-[70%] lg:max-w-[40%]">
        {title}
      </h1>

      <p className="py-4 text-sm md:text-base lg:text-lg max-w-[90%] md:max-w-[70%] lg:max-w-[36%]">
        {overview}
      </p>

      <div className="flex flex-wrap gap-4">
        <button
          aria-label="Play Video"
          className="bg-white inline-flex items-center w-32 md:w-40 py-3 md:py-4 px-6 md:px-10 rounded-md text-sm hover:bg-gray-300 transition"
        >
          <FaPlay size={16} className="text-black mr-2" />
          <span className='text-black opacity-60'>Play</span>
        </button>

        <button
          aria-label="More Info"
          className="bg-gray-500 text-white w-32 md:w-40 py-3 md:py-4 px-6 md:px-10 rounded-md text-sm"
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
