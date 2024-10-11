import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { getMoviesByCategory } from "../store/movies/moviesSlice";

const useFetchMoviesCategory = (category) => {
    const [moviesList, setMoviesList] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [pageCount, setPageCount] = useState(null)
    
    const dispatch = useDispatch()
    const moviesData = useSelector((state) => state.movies.data);

    const [searchParams] = useSearchParams()
    const page = searchParams.get("page")
    const {pathname} = useLocation()

    const navigate = useNavigate()

    const handlePageClick = (event) => {
        navigate(`?page=${event.selected+1}`)
    };

    useEffect(()=>{
        if(page){
            setPageNumber(page)
            dispatch(getMoviesByCategory({page, category:pathname}))
        }else{
            dispatch(getMoviesByCategory({page:pageNumber, category: category ? category : pathname}))
        }
    },[page, pathname])


    
    useEffect(()=>{
        if(moviesData){
            if(moviesData.data){
                setMoviesList(moviesData.data.results)
                setPageCount(moviesData.data.total_pages)
            }
        }
    },[moviesData])

    return {moviesList, pageNumber, pageCount, handlePageClick}
}

export default useFetchMoviesCategory