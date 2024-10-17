import { useEffect, useState } from "react";
import { getMoviesWithFilter } from "../store/movies/discoverSlice";
import { getTopRated } from "../store/movies/topRatedMoviesSlice";
import { getUpcoming } from "../store/movies/upcomingMoviesSlice";
import {useSelector, useDispatch} from "react-redux"


const useFetchMoviesHome = () => {
    const [popularList, setPopularList] = useState([])
    const [topRatedList, setTopRatedList] = useState([])
    const [upcomingList, setUpcomingList] = useState([])
  
    const topRatedData = useSelector(state=>state.topRated)
    const popularData = useSelector(state=> state.discover)
    const upcomingData = useSelector(state=>state.upcoming)
  
    const dispatch = useDispatch()
    
    useEffect(()=>{
      dispatch(getTopRated(1))
      dispatch(getMoviesWithFilter({page:1}))
      dispatch(getUpcoming(1))
    },[])
  
  
    useEffect(()=>{
      if(popularData){
        if(popularData.data){
          if(popularData.data.data){
            setPopularList(popularData.data.data.results)
          }
        }
      }
    },[popularData])
  
    useEffect(()=>{
      if(topRatedData){
        if(topRatedData.data){
          if(topRatedData.data.data){
            setTopRatedList(topRatedData.data.data.results)
          }
        }
      }
    },[topRatedData])
  
    useEffect(()=>{
      if(upcomingData){
        if(upcomingData.data){
          if(upcomingData.data.data){
            setUpcomingList(upcomingData.data.data.results)
          }
        }
      }
    },[upcomingData])

    return {popularList, topRatedList, upcomingList}
}

export default useFetchMoviesHome