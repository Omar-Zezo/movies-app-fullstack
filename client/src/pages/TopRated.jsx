import {useSelector} from "react-redux"
import MoviesPage from "../components/MoviesPage";
import useFetchMoviesCategory from "../hooks/fetch-movies-category";
import { getTopRated } from "../store/movies/topRatedMoviesSlice";

const TopRated = () => {

const moviesData = useSelector(state => state.topRated.data)
const {moviesList, pageNumber, pageCount, handlePageClick} = 
useFetchMoviesCategory(moviesData, getTopRated)

  return (
    <MoviesPage 
    moviesList={moviesList} 
    pageNumber={pageNumber} 
    pageCount={pageCount} 
    handlePageClick={handlePageClick}/>
  )
}

export default TopRated