import { useSelector } from 'react-redux';
import useMovieTrailor from '../hooks/useMovieTrailor';

const VideoBackground = ({ movieId }) => {
  useMovieTrailor(movieId); // Fetch trailer and store in Redux

  const trailorVideo = useSelector((store) => store.movies.trailorVideo);

  if (!trailorVideo?.key) return null;

  return (
    <div className="absolute top-0 left-0 w-full aspect-video max-h-screen z-[-1] overflow-hidden">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${trailorVideo.key}?autoplay=1&controls=0&modestbranding=1&rel=0&playsinline=1&enablejsapi=1`}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        title="YouTube Trailer"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
