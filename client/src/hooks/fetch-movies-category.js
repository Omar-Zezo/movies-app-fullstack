import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { useNavigate, useSearchParams } from "react-router-dom";
import { getMoviesByCategory } from "../store/movies/moviesSlice";

const useFetchMoviesCategory = (queryStr) => {
    const [moviesList, setMoviesList] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [pageCount, setPageCount] = useState(null)

    
    const dispatch = useDispatch()
    const moviesData = useSelector((state) => state.movies.data);

    const [searchParams] = useSearchParams()
    const page = searchParams.get("page")
    const sortByQuery = searchParams.get("sort_by")
    const yearQuery = searchParams.get("year")
    const genreQuery = searchParams.get("with_genres")
    const languageQuery = searchParams.get("with_original_language")
    
    const searchQuery = `sort_by=${sortByQuery}&year=${+yearQuery}${languageQuery !== "ar" ? `&vote_count.gte=300`:''}&with_original_language=${languageQuery ? languageQuery: "en"}${genreQuery ? `&with_genres=${genreQuery}`:''}`


    const navigate = useNavigate()

    const handlePageClick = (event) => {
        navigate(`?${searchQuery}&page=${event.selected+1}`)
    };


    useEffect(()=>{
        if(page){
            setPageNumber(page)
            dispatch(getMoviesByCategory({page, queryStr: searchQuery}))
        }else{
            dispatch(getMoviesByCategory({page:pageNumber, queryStr: searchQuery}))
        }
    },[queryStr, page, sortByQuery, yearQuery, genreQuery])


    useEffect(()=>{
        if(moviesData){
            if(moviesData.data){
                setMoviesList(moviesData.data.results)
                setPageCount(moviesData.data.total_pages)
            }
        }
    },[moviesData])

    return {moviesList, pageNumber, pageCount, handlePageClick, yearQuery, sortByQuery, genreQuery, languageQuery}
}

export default useFetchMoviesCategory