import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { useNavigate, useSearchParams } from "react-router-dom";
import { searchMovie } from "../store/movies/searchMovieSlice";

const useFetchMoviesSearch = () => {
    const [moviesList, setMoviesList] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [pageCount, setPageCount] = useState(null)
    
    const dispatch = useDispatch()
    const searchData = useSelector(state => state.searchMovie.data)

    const [searchParams] = useSearchParams()
    const keyword = searchParams.get("keyword")
    const page = searchParams.get("page")

    const navigate = useNavigate()


    const handlePageClick = (event) => {
        navigate(`?keyword=${keyword}&page=${event.selected+1}`)
      };



    useEffect(()=>{
        if(page){
            setPageNumber(page)
            dispatch(searchMovie({keyword, page}))
        }else{
            dispatch(searchMovie({keyword, pageNumber}))
        }
    },[page, keyword])

    
    useEffect(()=>{
        if(searchData){
            if(searchData.data){
                setMoviesList(searchData.data.results)
                setPageCount(searchData.data.total_pages)
            }
        }
    },[searchData])

    return {moviesList, pageNumber, pageCount, handlePageClick}
}

export default useFetchMoviesSearch