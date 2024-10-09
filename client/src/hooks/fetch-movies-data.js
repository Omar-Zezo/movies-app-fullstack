import { useEffect, useState } from "react";
import { getPopular } from "../store/movies/popularMoviesSlice";
import { getTopRated } from "../store/movies/topRatedMoviesSlice";
import { getUpcoming } from "../store/movies/upcomingMoviesSlice";
import {useSelector, useDispatch} from "react-redux"


const useFetchMoviesData = () => {
    const [popularList, setPopularList] = useState([])
    const [topRatedList, setTopRatedList] = useState([])
    const [upcomingList, setUpcomingList] = useState([])
  
    const topRatedData = useSelector(state=>state.topRated)
    const popularData = useSelector(state=> state.popular)
    const upcomingData = useSelector(state=>state.upcoming)
  
    const dispatch = useDispatch()
  
    useEffect(()=>{
      dispatch(getTopRated(1))
      dispatch(getPopular(1))
      dispatch(getUpcoming(1))
    },[])
  
  
    useEffect(()=>{
      if(topRatedData){
        if(topRatedData.data){
          if(topRatedData.data.data){
            setPopularList(topRatedData.data.data.results)
          }
        }
      }
    },[topRatedData])
  
    useEffect(()=>{
      if(popularData){
        if(popularData.data){
          if(popularData.data.data){
            setTopRatedList(popularData.data.data.results)
          }
        }
      }
    },[popularData])
  
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

export default useFetchMoviesData