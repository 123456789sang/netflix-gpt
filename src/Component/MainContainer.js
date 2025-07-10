import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-full min-h-screen pt-20 md:pt-24">
  {/* pt-20 ~ 80px padding top */}
  <div className="absolute inset-0 -z-10">
    <VideoBackground movieId={id} />
  </div>

  <VideoTitle title={original_title} overview={overview} />
</div>

  );
};

export default MainContainer;
