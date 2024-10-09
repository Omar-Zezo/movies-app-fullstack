import { Link } from "react-router-dom";
import { Close, Details, Plus } from "../images/svg";
import useCheckInWishlist from "../hooks/check-in-wishlist";

const Slide = ({ data, internal, userWishlist, removeFromList, addToList }) => {
  const {inWishlist, setInWishlist} = useCheckInWishlist(userWishlist, data.id);

  return (
    <div
      className="w-full h-full relative"
      style={{
        background: `url('https://image.tmdb.org/t/p/w1280${data.backdrop_path}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full h-full absolute top-0 left-0 z-10 block bg-bgOverlay">
        <div className="w-full absolute top-[70%] translate-y-[-70%] text-slate-100 pl-8">
          <h2 className="w-[85%] text-3xl xl:text-5xl tracking-wider uppercase m-0 p-0">
            {data.title}
          </h2>
          <p className="text-base xl:leading-6 leading-5 xl:w-[50%] w-[90%] font-medium text-slate-100 mt-10">
            {data.overview}
          </p>
          <div>
            <Link className="bg-mainColor btn" to={`movie/${data.id}`}>
              <img src={Details} alt="play" className="w-5 mr-2" />
              {internal ? "play" : "details"}
            </Link>
            {inWishlist ? (
              <button
                className={`bg-red-700 btn`}
                onClick={() =>{
                  removeFromList({
                    id: data.id,
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
                className={`bg-black btn`}
                onClick={() =>{
                  addToList({
                    id: data.id,
                    poster_path: data.poster_path,
                    vote_average: data.vote_average,
                  })
                }
                }
              >
                <img src={Plus} alt="plus" className="w-5 mr-2" />
                add to list
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
