import React from 'react'
import GptSearchBar from './GptSearchBar';

import { BG_URL } from '../utils/constant';
import GptMovieSuggestion from './GptMovieSuggestion';

const GptSearch = () => {
  return (
    <div>
            {/* /bg-image */}
        <div className='absolute -z-10'>
            <img src={BG_URL} alt="bg-image"/>
        </div>

        <GptSearchBar/>
        <GptMovieSuggestion/>  
    </div>
   
  )
}

export default GptSearch