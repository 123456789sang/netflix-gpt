import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {
    const movies=useSelector((store)=>store.movies);
   // console.log(movies);
  return (
    movies&&(
       <div className='bg-black  border-8 border-blue-950'>
         {/* only movielist goes to top of main container not whole secondary container so wrap it inside another div  */}
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