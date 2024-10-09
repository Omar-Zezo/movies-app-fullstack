import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getLoggedUser } from "../store/users/loggeduserSlice";

const useGetLoggeduser = () => {
  const [userData, setUserData] = useState(null);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const loggeduserData = useSelector((state) => state.loggeduser);
  
  useEffect(() => {
    if (token !== null) {
      dispatch(getLoggedUser(token));
    }
  }, [token]);

  useEffect(() => {
    if (loggeduserData) {
      if (loggeduserData.data) {
        if (loggeduserData.data.data) {
          setUserData(loggeduserData.data.data.data);
        }
      }
    }
  }, [loggeduserData]);

  return userData
};

export default useGetLoggeduser;
