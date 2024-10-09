import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "../components/Slider";
import { getSingleMovie } from "../store/movies/singleMovieSlice";
import { useSelector, useDispatch } from "react-redux";
import ScrollToTop from '../utils/ScrollToTop' 

const DetailsPage = () => {
  const [movie, setMovie] = useState({});

  const { id } = useParams();
  
  const dispatch = useDispatch()
  const movieData = useSelector(state=> state.singleMovie.data)

  useEffect(() => {
    if (id) {
      dispatch(getSingleMovie(id))
    }
  }, [id]);

  useEffect(()=>{
    if(movieData){
      if(movieData.data){
       setMovie(movieData.data)
      }
    }
  },[movieData])



  return (
    <div className="page landing">
      <ScrollToTop/>
      <Slider data={[movie]} internal={true}/>
    </div>
  );
};

export default DetailsPage;
