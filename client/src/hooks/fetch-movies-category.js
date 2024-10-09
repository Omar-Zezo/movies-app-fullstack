import { useEffect, useState } from "react";
import {useDispatch} from "react-redux"
import { useNavigate, useSearchParams } from "react-router-dom";

const useFetchMoviesCategory = (moviesData, dispatchMethod) => {
    const [moviesList, setMoviesList] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [pageCount, setPageCount] = useState(null)
    
    const dispatch = useDispatch()

    const [searchParams, setSearchParams] = useSearchParams()
    const page = searchParams.get("page")

    const navigate = useNavigate()

    const handlePageClick = (event) => {
        navigate(`?page=${event.selected+1}`)
    };

    useEffect(()=>{
        if(page){
            setPageNumber(page)
            dispatch(dispatchMethod(page))
        }else{
            dispatch(dispatchMethod(pageNumber))
        }
    },[page])


    
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