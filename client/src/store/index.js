import {configureStore} from "@reduxjs/toolkit" 
import discover from './movies/discoverSlice'
import moviesCategory from './movies/moviesCategorySlice'
import genre from './movies/genresSlice'
import topRated from './movies/topRatedMoviesSlice'
import upcoming from './movies/upcomingMoviesSlice'
import singleMovie from './movies/singleMovieSlice'
import searchMovie from './movies/searchMovieSlice'
import signup from './users/signupSlice'
import signin from './users/signinSlice'
import loggeduser from './users/loggeduserSlice'
import wishlist from './users/wishlistSlice'
import profileImg from './users/profileImgSlice'
import changePassword from './users/changePasswordSlice'
import subscribe from './users/subscribeSlice'


const store = configureStore({
    reducer: {
      discover,
      moviesCategory,
      genre,
      topRated,
      upcoming,
      searchMovie,
      singleMovie,
      signup,
      signin,
      subscribe,
      loggeduser,
      changePassword,
      wishlist,
      profileImg
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})

export default store