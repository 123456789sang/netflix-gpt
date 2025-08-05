import React from 'react'
import { useDispatch } from 'react-redux';
import  { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import{ addTrailorVideo} from '../utils/movieSlice'


const useMovieTrailor= (movieId) => {
   
    const dispatch=useDispatch();
    
    const getMovieVideos =async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS);
        const json = await data.json();
        console.log(json)

        const filterData = json.results.filter(video=>video.type==="Trailer");
        const trailor  = filterData.length?filterData[0]:json.results[0];
        console.log(trailor);
        //setTrailorId(trailor.key);
        dispatch(addTrailorVideo(trailor))
    } 
    useEffect(()=>{
        getMovieVideos();
    },[])  
  
  
}

export default useMovieTrailor 