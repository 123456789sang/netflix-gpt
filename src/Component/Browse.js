
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import usePopularmovies from '../hooks/useTopRatedMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
    const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)
    useNowPlayingMovies();  
    useTopRatedMovies();
    usePopularmovies(); 
    useUpcomingMovies();
    
    return (
        <div className='h-screen' >
            <Header />
            {showGptSearch ? ( <GptSearch/>) :(
                <>
                    <MainContainer />
                    <SecondaryContainer />    
                </>
            )}
            
        </div>
   )
}

export default Browse;
