import React from "react";
import { Link } from "react-router-dom";

const Card = ({data}) => {
  return (
    <div className="w-full h-[300px] rounded-sm" onClick={()=> console.log(data)}>
      <Link to={`/movie/${data.id}`}>
        <img
        className="object-cover object-center size-full rounded-sm"
          loading="lazy"
          src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
          alt=""
        />
      </Link>
    </div>
  );
};

export default Card;
