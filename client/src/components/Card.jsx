import { Link } from "react-router-dom";
import { setRatingColor } from "../constants";
import { Check, Trash } from "../images/svg";
import useCheckInWishlist from "../hooks/check-in-wishlist";
import { WishlistContext } from "../pages/Layout";
import { useContext } from "react";

const Card = ({data, wCard}) => {
const {inWishlist, setInWishlist} = useCheckInWishlist(data.id)
const {removeFromList} = useContext(WishlistContext);

  return (
    <div className={`w-full h-full relative rounded-lg border-4 ${setRatingColor(Math.ceil((data.vote_average * 1000) / 100))}`}>
      {
        inWishlist ? (
          <div className={`absolute z-50 bottom-5 left-[50%] translate-x-[-50%] size-fit py-1 pr-2 pl-1 rounded-lg cursor-pointer bg-red-600 flex items-center justify-center`}
          onClick={() =>{
            removeFromList({
              id: data.id,
            })
            setInWishlist(false)
          }}
          >
          <img width={20} src={Trash} className=""/>
          <small className="text-white pl-1">Remove</small>
          </div> 
        ):null
      }
      <Link to={`/movie/${data.id}`}>
      <div className={`absolute top-2 left-2 size-6 border-[3px] p-3 text-sm ${setRatingColor(Math.ceil((data.vote_average * 1000) / 100))} rounded-full flex justify-center items-center`}>
        <small className="text-white font-medium">{Math.ceil((data.vote_average * 1000) / 100)}</small>
      </div>
      {
       inWishlist && wCard === false? (
        <img width={80} src={Check} className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"/>
        ):null
      }
        <img
        className={`object-contain object-center size-full rounded-sm ${wCard === false && inWishlist ? 'opacity-10':'opacity-none'}`}
          loading="lazy"
          src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
          alt=""
        />
      </Link>
    </div>
  );
};

export default Card;
