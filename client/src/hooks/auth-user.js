import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form"

const useAuth = (authData, dispatchMethod) => {
    const {reset} = useForm()
    const onSubmit = (data) => dispatch(dispatchMethod(data))

    const errorMsg = (msg) => toast.error(msg);
  
    const dispatch = useDispatch();
  
    const navigate = useNavigate();
  
    useEffect(() => {
      if (authData) {
        if (authData.error !== null) {
          if (authData.error.data) {
            errorMsg(authData.error.data.message);
          }
        }
        if (authData.data) {
          if (authData.data.data) {
            localStorage.setItem("token", authData.data.data.token);
            reset()
            navigate("/");
          }
        }
      }
    }, [authData]);

    return onSubmit
}

export default useAuth