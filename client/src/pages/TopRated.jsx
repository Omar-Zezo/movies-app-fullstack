import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getTopRated } from "../redux/actions/movieActions";
import { useSearchParams, useNavigate } from "react-router-dom";
import MoviesPage from "../components/MoviesPage";


const TopRated = () => {
    const [moviesList, setMoviesList] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [pageCount, setPageCount] = useState(null)
    
    const dispatch = useDispatch()
    const topRatedData = useSelector(state => state.movieReducer.topRated)

    const [searchParams, setSearchParams] = useSearchParams()
    const page = searchParams.get("page")

    const navigate = useNavigate()

    const handlePageClick = (event) => {
        navigate(`?page=${event.selected+1}`)
    };

    useEffect(()=>{
        if(page){
            setPageNumber(page)
            dispatch(getTopRated(page))
        }else{
            dispatch(getTopRated(pageNumber))
        }
    },[page])


    

    useEffect(()=>{
        if(topRatedData){
            if(topRatedData.data){
                setMoviesList(topRatedData.data.results)
                setPageCount(topRatedData.data.total_pages)
            }
        }
    },[topRatedData])


  return (
    <MoviesPage 
    moviesList={moviesList} 
    pageNumber={pageNumber} 
    pageCount={pageCount} 
    handlePageClick={handlePageClick}/>
  )
}

export default TopRated