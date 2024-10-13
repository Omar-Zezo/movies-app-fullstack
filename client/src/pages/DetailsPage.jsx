import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleMovie } from "../store/movies/singleMovieSlice";
import { useSelector, useDispatch } from "react-redux";
import ScrollToTop from '../utils/ScrollToTop' 
import { setRatingColor } from "../constants";
import useMovieEmoji from "../hooks/movie-emoji";
import { Close, Plus } from "../images/svg";
import useCheckInWishlist from "../hooks/check-in-wishlist";
import { WishlistContext } from "./Layout";

const DetailsPage = () => {
  const [movie, setMovie] = useState({});
  const emoji = useMovieEmoji()
  const {inWishlist, setInWishlist} = useCheckInWishlist(movie.id)
  const {removeFromList, addToList} = useContext(WishlistContext);

  const { id } = useParams();
  
  const dispatch = useDispatch()
  const movieData = useSelector(state=> state.singleMovie.data)

  useEffect(() => {
    if (id) {
      dispatch(getSingleMovie(id))
    }
  }, [id]);

  console.log(movie)

  useEffect(()=>{
    if(movieData){
      if(movieData.data){
       setMovie(movieData.data)
      }
    }
  },[movieData])


  return (
    <div style={{
      background: `url('https://image.tmdb.org/t/p/w1280${movie.backdrop_path}')`,
  }}
  className='w-full h-screen page-cover'
  >
    <ScrollToTop/>
    <div className="bg-black/85 size-full py-28">
    <div className="container mx-auto max-lg:flex-col flex gap-10">
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className="w-[280px] h-[400px] rounded-md max-lg:mx-auto"/>
      <div className="flex flex-col pt-3 pb-[80px] max-lg:pl-4">
        <h1 className="text-white lg:text-4xl text-3xl font-semibold">{movie.title} <span className="text-slate-200">({movie.release_date?.split("-")[0]})</span></h1>
        <div className="flex flex-wrap gap-2 mt-2 px-1">
          <p className="text-white text-base font-medium">({movie?.origin_country})</p>
          <p className="text-white text-base font-medium relative">
             - {movie.release_date} -
          </p>
          <p className="text-white text-base font-medium">
            {movie.genres?.map(movie=> movie.name).join(" , ")}
          </p>
        </div>
        <div className="flex gap-4 mt-7 items-center">
            <div className={`size-16 border-4 p-3 text-sm ${setRatingColor(Math.ceil((movie.vote_average * 1000) / 100))} rounded-full flex justify-center items-center`}>
            <small className="text-white text-xl font-medium">{Math.ceil((movie.vote_average * 1000) / 100)}</small>
            </div>
            <p className="text-xl text-white font-medium">User Score</p>
            {emoji(Math.ceil((movie.vote_average * 1000) / 100))}
        </div>
        <div className="w-fit">
        {inWishlist ? (
              <button
                className={`bg-red-700 btn`}
                onClick={() =>{
                  removeFromList({
                    id: movie.id,
                  })
                  setInWishlist(false)
                }
                }
              >
                <img src={Close} alt="plus" className="w-3 mr-2" />
                Remove From List
              </button>
            ) : (
              <button
                className={`bg-black btn shadow-sm shadow-mainColor`}
                onClick={() =>{
                  addToList({
                    id: movie.id,
                    poster_path: movie.poster_path,
                    vote_average: movie.vote_average,
                  })
                }
                }
              >
                <img src={Plus} alt="plus" className="w-5 mr-2" />
                add to list
              </button>
            )}
        </div>
        <p className="text-gray-400 text-xl italic font-medium mt-6">{movie?.tagline}</p>
        <div className="mt-6 flex flex-col gap-2">
          <h4 className="text-slate-100 text-xl font-semibold">Overview</h4>
          <p className="text-white text-base xl:w-[90%]">{movie.overview}</p>
        </div>
      </div>
    </div>
    </div>
  </div>
  );
};

export default DetailsPage;
