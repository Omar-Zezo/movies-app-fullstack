import {configureStore} from "@reduxjs/toolkit" 
import movies from './movies/moviesSlice'
import topRated from './movies/topRatedMoviesSlice'
import upcoming from './movies/upcomingMoviesSlice'
import singleMovie from './movies/singleMovieSlice'
import searchMovie from './movies/searchMovieSlice'
import signup from './users/signupSlice'
import signin from './users/signinSlice'
import loggeduser from './users/loggeduserSlice'
import wishlist from './users/wishlistSlice'


const store = configureStore({
    reducer: {
      movies,
      topRated,
      upcoming,
      searchMovie,
      singleMovie,
      signup,
      signin,
      loggeduser,
      wishlist,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})

export default store