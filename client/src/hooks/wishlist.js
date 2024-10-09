import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {toast} from "react-toastify"
import { addToWishlist, removeFromWishlist } from "../store/users/wishlistSlice";

const useWishlist = () => {
  const addToWishlistData = useSelector((state) => state.wishlist);
  const errorMsg = (msg) => toast.error(msg);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const addToList = (data)=> dispatch(addToWishlist({data, token}))
  const removeFromList = (data)=> dispatch(removeFromWishlist({data, token}))

  useEffect(() => {
    if (addToWishlistData) {
      if (addToWishlistData.error) {
        if (addToWishlistData.error.data) {
            errorMsg(addToWishlistData.error.data.message);
        }
      }
    }
  }, [addToWishlistData]);

  return {addToList, removeFromList}
};

export default useWishlist;
