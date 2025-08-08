import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailorVideo:null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,actions)=>{
            state.nowPlayingMovies=actions.payload;
        },
        addTrailorVideo:(state,actions)=>{

           state.trailorVideo=actions.payload;
        },
        addPopularMovies:(state,actions)=>{
            state.popularMovies=actions.payload;
        },
        addTopRatedMovies:(state,actions)=>{
            state.topRatedMovies=actions.payload;
        },
        addUpcomingMovies:(state,actions)=>{
            state.upComingMovies=actions.payload;
        }
    }
})
export const {addNowPlayingMovies,addTrailorVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies}=movieSlice.actions;
export default movieSlice.reducer;