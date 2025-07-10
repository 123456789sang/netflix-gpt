import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';
const SecondaryContainer = () => {
    const movies=useSelector((store)=>store.movies);
    
  return (
    <div className='relative z-10'>
        <MovieList title={"nowPlayingMovies"} movies={movies.nowPlayingMovies}/>   
    </div>
  )
}

export default SecondaryContainer