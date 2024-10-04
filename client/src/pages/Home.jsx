import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import SliderCards from "../components/SliderCards";
import { Ask } from "../components/Ask";
import Subscription from "../components/Subscription";
import { getTopRated, getPopular, getUpcoming } from "../redux/actions/movieActions";
import {useSelector, useDispatch} from "react-redux"

const Home = () => {
  const [popularList, setPopularList] = useState([])
  const [topRated, setTopRatedList] = useState([])
  const [upcomingList, setUpcomingList] = useState([])

  const topRatedData = useSelector(state=>state.movieReducer.topRated)
  const popularData = useSelector(state=>state.movieReducer.popular)
  const upcomingData = useSelector(state=>state.movieReducer.upcoming)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(topRatedData){
      if(topRatedData.data){
        setTopRatedList(topRatedData.data.results)
      }
    }
  },[topRatedData])

  useEffect(()=>{
    if(popularData){
      if(popularData.data){
        setPopularList(popularData.data.results)
      }
    }
  },[popularData])

  useEffect(()=>{
    if(upcomingData){
      if(upcomingData.data){
        setUpcomingList(upcomingData.data.results)
      }
    }
  },[upcomingData])


  useEffect(()=>{
    dispatch(getTopRated(1))
    dispatch(getPopular(1))
    dispatch(getUpcoming(1))
  },[])


  return (
    <div className="landing">
      <Slider data={popularList.slice(8,11)} internal={false}/>
      <SliderCards title={"Top Rated Movies"} data={topRated}/>
      <SliderCards title={"Popular Movies"} data={popularList}/>
      <SliderCards title={"Upcoming Movies"} data={upcomingList}/>
      <Ask/>
      <Subscription/>
    </div>
  );
};

export default Home;
