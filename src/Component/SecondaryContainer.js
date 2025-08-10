import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {
    const movies=useSelector((store)=>store.movies);
   // console.log(movies);
  return (
    movies&&(
       <div className='relative  '>
            <div className="absolute inset-0 mt-40 bg-black z-20"></div>
            <div className="-mt-40 pl-10 relative z-20 ">   
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
                <MovieList title={""} movies={movies.popularMovies} />
                <MovieList title={"Up coming"} movies={movies.upComingMovies} />
            </div>
        </div>
    )
  )
}

export default SecondaryContainer;