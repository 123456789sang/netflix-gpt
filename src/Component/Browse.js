
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';

const Browse = () => {
   
  
    useNowPlayingMovies();   
    
    return (
        <div className='h-screen' >
            <Header />
            <MainContainer />
            <div className="" /> {/* Spacer */}
               <SecondaryContainer />
            <div/>
           
        </div>
   )
}

export default Browse;
