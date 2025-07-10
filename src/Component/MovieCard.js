import React from 'react';
import { IMG_CDN_URL } from '../utils/constant';

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className=' p-2 bg-white z-10 relative'>
      <img
        className='  rounded-lg shadow-lg'
        src={IMG_CDN_URL + posterPath}
        alt='movie-poster'
      />
    </div>
  );
};

export default MovieCard;
