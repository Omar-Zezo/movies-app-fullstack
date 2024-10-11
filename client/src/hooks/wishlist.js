import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../store/users/wishlistSlice";
import {toast} from "react-toastify"

const useWishlist = () => {
  const {error} = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const addToList = (data)=> dispatch(addToWishlist({data, token}))
  const removeFromList = (data)=> dispatch(removeFromWishlist({data, token}))

  const errorMsg = (msg)=> toast.error(msg)

  useEffect(() => {
    if (error) {
      if (error) {
        if (error.data) {
          errorMsg(error.data.message)
        }
      }
    }
  }, [error]);

  return {addToList, removeFromList}
};

export default useWishlist;
