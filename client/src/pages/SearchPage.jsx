import MoviesPage from "../components/MoviesPage";
import useFetchMoviesSearch from "../hooks/fetch-movies-search";

const SearchPage = () => {

const {moviesList, pageNumber, pageCount, handlePageClick} = 
useFetchMoviesSearch()
  return (
    <MoviesPage 
    moviesList={moviesList} 
    pageNumber={pageNumber} 
    pageCount={pageCount} 
    handlePageClick={handlePageClick}/>
  )
}

export default SearchPage