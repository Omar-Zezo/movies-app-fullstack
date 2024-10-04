import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getPopular } from "../redux/actions/movieActions";
import { useNavigate, useSearchParams } from "react-router-dom";
import MoviesPage from "../components/MoviesPage";


const Discover = () => {
    const [moviesList, setMoviesList] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [pageCount, setPageCount] = useState(null)
    
    const dispatch = useDispatch()
    const moviesData = useSelector(state => state.movieReducer.popular)

    const [searchParams, setSearchParams] = useSearchParams()
    const page = searchParams.get("page")

    const navigate = useNavigate()

    const handlePageClick = (event) => {
        navigate(`?page=${event.selected+1}`)
    };

    useEffect(()=>{
        if(page){
            setPageNumber(page)
            dispatch(getPopular(page))
        }else{
            dispatch(getPopular(pageNumber))
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


  return (
    <MoviesPage 
    moviesList={moviesList} 
    pageNumber={pageNumber} 
    pageCount={pageCount} 
    handlePageClick={handlePageClick}/>
  )
}

export default Discover