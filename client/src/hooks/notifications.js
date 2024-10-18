import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const useNotifications = () => {
  const { updateUser, error } = useSelector((state) => state.loggeduser);
  const changePasswordData = useSelector((state) => state.changePassword);
  const subscribeData = useSelector((state) => state.subscribe);
  const loginData = useSelector((state) => state.signin);
  const signupData = useSelector((state) => state.signup);

  const successMsg = (msg) => toast.success(msg);
  const errorMsg = (msg) => toast.error(msg);

  // Handling signup notification
  useEffect(() => {
    if (signupData) {
      if (signupData.error !== null) {
        if (signupData.error.data) {
          errorMsg(signupData.error.data.message);
        }
      }
      if (signupData.data) {
        if (signupData.data.data) {
          localStorage.setItem("token", signupData.data.data.token);
          window.location = "/";
        }
      }
    }
  }, [signupData]);

  // Handling login notification
  useEffect(() => {
    if (loginData) {
      if (loginData.error !== null) {
        if (loginData.error.data) {
          errorMsg(loginData.error.data.message);
        }
      }
      if (loginData.data) {
        if (loginData.data.data) {
          localStorage.setItem("token", loginData.data.data.token);
          window.location = "/";
        }
      }
    }
  }, [loginData]);

  // Handling user info update notification
  useEffect(() => {
    if (updateUser) {
      successMsg("User info has been updated");
    }
    if (error) {
      if (error.data) {
        errorMsg(error.data.message);
      }
    }
  }, [updateUser, error]);

  // Handling change password notification
  useEffect(() => {
    if (changePasswordData) {
      if (changePasswordData.error) {
        if (changePasswordData.error.data) {
          errorMsg(changePasswordData.error.data.message);
        }
      }
      if (changePasswordData.data) {
        if (changePasswordData.data.data) {
          successMsg("Password has been updated");
        }
      }
    }
  }, [changePasswordData]);

  // Handling subscription notification
  useEffect(() => {
    if (subscribeData) {
      if (subscribeData.error) {
        if (subscribeData.error.data) {
          errorMsg(subscribeData.error.data.message);
        }
      }
      if (subscribeData) {
        if (subscribeData.data) {
          if (subscribeData.data.data) {
            successMsg("You have successfully subscribed");
          }
        }
      }
    }
  }, [subscribeData]);
};

export default useNotifications;
