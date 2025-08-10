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
    <div className="relative w-full h-screen   ">
        {/* pt-20 ~ 80px padding top */}
        <div className="absolute top-0 left-0 h-full -z-10">
            <VideoBackground movieId={id} />
        </div>

        <VideoTitle title={original_title} overview={overview} />
    </div>

  );
};

export default MainContainer;
