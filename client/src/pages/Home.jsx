import React, { useEffect, useState } from "react";
import Navbar from "../utils/Navbar";
import Slider from "../components/Slider";
import SliderCards from "../components/SliderCards";
import { Ask } from "../components/Ask";
import Subscription from "../components/Subscription";
import axios from "axios"

const Home = () => {
  const [popularList, setPopularList] = useState([])
  const [topRated, setTopRatedList] = useState([])
  const [upcomingList, setUpcomingList] = useState([])

  const getData = async()=>{
    // get movies list
    await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=2d1450a575e2dcacc1d2e19b768fdfdf&language=en-US&page=1").then((movies)=>{
      setPopularList(movies.data.results)
    })
    // get top rated list
    await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=2d1450a575e2dcacc1d2e19b768fdfdf&language=en-US&page=1").then((tv)=>{
      setTopRatedList(tv.data.results)
    })
    // get upcoming list
    await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=2d1450a575e2dcacc1d2e19b768fdfdf&language=en-US&page=1").then((tv)=>{
      setUpcomingList(tv.data.results)
    })
  }


  useEffect(()=>{
    getData()
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
