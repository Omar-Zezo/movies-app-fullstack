import {useSelector} from "react-redux"
import MoviesPage from "../components/MoviesPage";
import useFetchMoviesCategory from "../hooks/fetch-movies-category";
import { getUpcoming } from "../store/movies/upcomingMoviesSlice";


const Upcoming = () => {

const moviesData = useSelector(state => state.upcoming.data)
const {moviesList, pageNumber, pageCount, handlePageClick} =
useFetchMoviesCategory(moviesData, getUpcoming)

  return (
    <MoviesPage 
    moviesList={moviesList} 
    pageNumber={pageNumber} 
    pageCount={pageCount} 
    handlePageClick={handlePageClick}/>
  )
}

export default Upcoming