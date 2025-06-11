
import { useSelector } from 'react-redux';
import useMovieTrailor from '../hooks/useMovieTrailor';
const VideoBackground = ({movieId}) => {
    
    const trailorVideo = useSelector(store=>store.movies.trailorVideo)

    // fetch the trailor video && update the redux 

      
     useMovieTrailor(movieId);
   return (
       <div className='w-screen h-screen'>
            <iframe 
               className='w-screen h-full aspect-video'
              width="560"
               height="315" 
               src={"https://www.youtube.com/embed/"+trailorVideo?.key+"?&autoplay=1&mute=1"} 
               title="YouTube video player" 
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               
            />
       </div>
   )
}

export default VideoBackground