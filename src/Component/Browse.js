
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import usePopularmovies from '../hooks/useTopRatedMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
const Browse = () => {
   
  
    useNowPlayingMovies();  
    useTopRatedMovies();
    usePopularmovies(); 
    useUpcomingMovies();
    
    return (
        <div className='h-screen' >
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
   )
}

export default Browse;
