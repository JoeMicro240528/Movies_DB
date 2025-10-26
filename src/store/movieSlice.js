import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const initialState = {
    movies: [],
    searchMovies:[],
    loading: false,
    movie:[],
    currentPage: 1,
    total_pages: 0,
    error: null,
    FavoriteMovies: [],
    TrendingMovies: [],
    
}

// get all movies with pagination

export const getAllMovies = createAsyncThunk(
  'movie/getAll',
  async (page, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=653a7429e9a4c56b67161a433c050289&page=${page}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue((error).message);
    }
  }
);

// tranding movies
export const getTrendingMovies = createAsyncThunk(
  'movie/getTrending',
  async (_, { rejectWithValue }) => {
    try {
       
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=653a7429e9a4c56b67161a433c050289`
        );
        const data = await response.json();
        return data.results.slice(0, 10);
    } catch (error) {
      return rejectWithValue((error).message);
    }
  }
);


//get single movie
export const getMovie = createAsyncThunk(
  'movie/getMovie',
  async (movieId, { rejectWithValue }) => {
    try {   
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=653a7429e9a4c56b67161a433c050289`
        );
        const data = await response.json();
          console.log(data);
        return data;
      
        
    }
    catch (error) {
      return rejectWithValue((error).message);
    } 
  }
);


//search movie by name
export const searchMovie = createAsyncThunk(
  'movie/searchMovie',
  async (query, { rejectWithValue }) => {
    try { 
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=653a7429e9a4c56b67161a433c050289&query=${query}`
        );
        const data = await response.json();
        return data.results;
    } catch (error) {
      return rejectWithValue((error).message);
    }
  }
);


export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addToFavoriteMovies: (state, action) => {
        state.FavoriteMovies.push(action.payload);
    },

     nextPage:(state, action) => {
        state.currentPage = state.currentPage + 1;
    },

      previousPage:(state, action) => {
        state.currentPage = state.currentPage - 1;
    }
  },

  extraReducers: (builder) => {
             // get trendingMovies 
           builder.addCase(getTrendingMovies.fulfilled, (state, action) => {
               state.TrendingMovies = action.payload;
               state.loading = false;
           });
           builder.addCase(getTrendingMovies.pending, (state) => {
               state.loading = true;
           });
           builder.addCase(getTrendingMovies.rejected, (state, action) => {
               state.error = action.payload;
               state.loading = false;
           });

           //get single movie 
           builder.addCase(getMovie.fulfilled, (state, action) => {
               state.movie = action.payload;
               state.loading = false;
           });
           builder.addCase(getMovie.pending, (state) => {
               state.loading = true;
           });
            builder.addCase(getMovie.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });

            //get all movies 

            builder.addCase(getAllMovies.fulfilled, (state, action) => {
                 state.movies = action.payload.results;
                state.total_pages = action.payload.total_pages;
                state.currentPage = action.meta.arg;
                state.loading = false;
            });
            builder.addCase(getAllMovies.pending, (state) => {
                state.loading = true;
            });
            builder.addCase(getAllMovies.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });

           // search movie

            builder.addCase(searchMovie.fulfilled, (state, action) => {
                state.searchMovies = action.payload;
                state.loading = false;
            }); 
            builder.addCase(searchMovie.pending, (state, action) => {
                state.loading = true;
            }); 
            builder.addCase(searchMovie.rejected, (state, action) => {
                 state.error = action.payload;
                state.loading = false;
            }); 

            

  }
})

// Action creators are generated for each case reducer function
 export const { addToFavoriteMovies, nextPage, previousPage } = movieSlice.actions

export default movieSlice.reducer