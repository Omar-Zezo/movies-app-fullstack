import { useContext, useEffect, useState } from "react";
import { LoggedUserContext } from "../App";

const useCheckInWishlist = (id) => {
  const [inWishlist, setInWishlist] = useState(false);
  const loggedUser = useContext(LoggedUserContext)

  useEffect(() => {
    setInWishlist(false)
    loggedUser?.wishlist.map((item) => {
        if (item.id === id) {
          setInWishlist(true);
        }
    });
  }, [loggedUser?.wishlist, id]);

  return {inWishlist, setInWishlist};
};

export default useCheckInWishlist;
