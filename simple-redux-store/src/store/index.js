import { configureStore, createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong: (state, action) => {
      state.push(action.payload);
    },
    removeSong: (state, action) => {
      return state.filter((song) => song !== action.payload);
    },
    reset:(state,action)=>{
        return []
    }
  },
});

const movieSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload);
    },
    removeMovie: (state, action) => {
      return state.filter((movie) => movie !== action.payload);
    },
    reset:(state,action)=>{
        return [];
    }
  },
});
console.log(songSlice.actions);
export const { addSong, removeSong } = songSlice.actions;
export const { addMovie, removeMovie ,reset} = movieSlice.actions;

export const store = configureStore({
  reducer: {
    song: songSlice.reducer,
    movie: movieSlice.reducer,
  },
});
