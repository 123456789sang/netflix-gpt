import { useSelector } from 'react-redux';
import useMovieTrailor from '../hooks/useMovieTrailor';

const VideoBackground = ({ movieId }) => {
  useMovieTrailor(movieId); // Fetch trailer and store in Redux

  const trailorVideo = useSelector((store) => store.movies.trailorVideo);

  if (!trailorVideo?.key) return null;

  return (
    <div className="w-screen">
      <iframe
            className="w-screen aspect-video"
            src={"https://www.youtube.com/embed/" + trailorVideo?.key + "?&autoplay=1&mute=1"}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            title="YouTube Trailer"
            frameBorder="0" 
        />
    </div>
  );
};

export default VideoBackground;
