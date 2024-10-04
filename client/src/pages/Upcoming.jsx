import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { useNavigate, useSearchParams } from "react-router-dom";
import { getUpcoming } from "../redux/actions/movieActions";
import MoviesPage from "../components/MoviesPage";


const Upcoming = () => {
    const [moviesList, setMoviesList] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [pageCount, setPageCount] = useState(null)
    
    const dispatch = useDispatch()
    const upcomingData = useSelector(state => state.movieReducer.upcoming)

    const [searchParams, setSearchParams] = useSearchParams()
    const page = searchParams.get("page")

    const navigate = useNavigate()

    const handlePageClick = (event) => {
        navigate(`?page=${event.selected+1}`)
    };

    useEffect(()=>{
        if(page){
            setPageNumber(page)
            dispatch(getUpcoming(page))
        }else{
            dispatch(getUpcoming(pageNumber))
        }
    },[page])


    useEffect(()=>{
        if(upcomingData){
            if(upcomingData.data){
                setMoviesList(upcomingData.data.results)
                setPageCount(upcomingData.data.total_pages)
            }
        }
    },[upcomingData])


  return (
    <MoviesPage 
    moviesList={moviesList} 
    pageNumber={pageNumber} 
    pageCount={pageCount} 
    handlePageClick={handlePageClick}/>
  )
}

export default Upcoming