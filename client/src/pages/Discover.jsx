import MoviesPage from "../components/MoviesPage";
import useFetchMoviesCategory from "../hooks/fetch-movies-category";
import {useSelector} from "react-redux"
import { getPopular } from "../store/movies/popularMoviesSlice";


const Discover = () => {
const moviesData = useSelector(state => state.popular.data)
const {moviesList, pageNumber, pageCount, handlePageClick} = 
useFetchMoviesCategory(moviesData, getPopular)
  return (
    <MoviesPage 
    moviesList={moviesList} 
    pageNumber={pageNumber} 
    pageCount={pageCount} 
    handlePageClick={handlePageClick}/>
  )
}

export default Discover