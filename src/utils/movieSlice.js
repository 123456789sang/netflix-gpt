import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailorVideo:null
    },
    reducers:{
        addNowPlayingMovies:(state,actions)=>{
            state.nowPlayingMovies=actions.payload;
        },
        addTrailorVideo:(state,actions)=>{

           state.trailorVideo=actions.payload;
        }
    }
})
export const {addNowPlayingMovies,addTrailorVideo}=movieSlice.actions;
export default movieSlice.reducer;