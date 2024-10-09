import { Link } from "react-router-dom";
import { setRatingColor } from "../constants";
import { Check } from "../images/svg";
import useCheckInWishlist from "../hooks/check-in-wishlist";

const Card = ({data, userWishlist}) => {
const {inWishlist} = useCheckInWishlist(userWishlist, data.id)

  return (
    <div className={`w-full h-full relative rounded-lg border-4 ${setRatingColor(Math.ceil((data.vote_average * 1000) / 100))}`}>
      <Link to={`/movie/${data.id}`}>
      <div className={`absolute top-2 left-2 size-6 border-[3px] p-3 text-sm ${setRatingColor(Math.ceil((data.vote_average * 1000) / 100))} rounded-full flex justify-center items-center`}>
        <small className="text-white font-medium">{Math.ceil((data.vote_average * 1000) / 100)}</small>
      </div>
       {
        inWishlist ? (
          <img width={80} src={Check} className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] font-semibold text-white"/>
        ):null
       } 
        <img
        className={`object-contain object-center size-full rounded-sm ${inWishlist ? 'opacity-10':'opacity-none'}`}
          loading="lazy"
          src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
          alt=""
        />
      </Link>
    </div>
  );
};

export default Card;
