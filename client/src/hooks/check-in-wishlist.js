import { useEffect, useState } from "react";

const useCheckInWishlist = (userWishlist, id) => {
  const [inWishlist, setInWishlist] = useState(false);
  useEffect(() => {
    userWishlist?.map((item) => {
        if (item.id === id) {
          setInWishlist(true);
        }
    });
  }, [userWishlist]);

  return {inWishlist, setInWishlist};
};

export default useCheckInWishlist;
