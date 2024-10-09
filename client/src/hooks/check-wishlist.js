import { useEffect, useState } from "react";

const useCheckWishlist = (movieId) => {
  const [inWishlist, setInWishlist] = useState(false);
  const userWishlist = [
    {
      id: 889737,
      poster_path: "/if8QiqCI7WAGImKcJCfzp6VTyKA.jpg",
      vote_average: 5.798,
    },
    {
      id: 726139,
      poster_path: "/fttoFfKikQMwIoV3UVvlCvBhbUw.jpg",
      vote_average: 6.829,
    },
  ];
  useEffect(() => {
    userWishlist.map((item) => {
      if (item.id === movieId) {
        setInWishlist(true);
      }
    });
    return inWishlist
  }, []);
};

export default useCheckWishlist;
