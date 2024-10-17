import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { getMoviesCategory } from '../store/movies/moviesCategorySlice'

const useFetchMoviesCategory = () => {
    const [moviesList, setMoviesList] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [pageCount, setPageCount] = useState(null)
    

    const [searchParams] = useSearchParams()
    const page = searchParams.get("page")
    
    const dispatch = useDispatch()
    const {data} = useSelector(state=> state.moviesCategory)

    const navigate = useNavigate()
    const {pathname} = useLocation()


    const handlePageClick = (event) => {
        navigate(`?page=${event.selected+1}`)
    };
    
    useEffect(()=>{
        if(page){
            setPageNumber(page)
            dispatch(getMoviesCategory({page, category: pathname.slice(1)}))
        }else{
            dispatch(getMoviesCategory({page:pageNumber, category: pathname.slice(1)}))
        }
    },[page, pathname])
    
    useEffect(()=>{
        if(data){
            if(data.data){
                setMoviesList(data.data.results)
                setPageCount(data.data.total_pages)
            }
        }
    },[data])

    return {moviesList, handlePageClick, pageNumber, pageCount}
}

export default useFetchMoviesCategory