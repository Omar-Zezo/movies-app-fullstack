import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
import Profile from "./pages/user/Profile.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import AuthLayout from "./pages/authLayout.jsx";
import Login from "./pages/user/Login.jsx";
import Signup from "./pages/user/signup.jsx";
import ForgotPassword from "./pages/user/ForgotPassword.jsx";
import VerificationCode from "./pages/user/VerificationCode.jsx";
import ResetPassword from "./pages/user/ResetPassword.jsx";
import useGetLoggeduser from "./hooks/get-logged-user.js";
import { createContext, useEffect } from "react";
import Page404 from "./pages/Page404.jsx";
import MoviesDiscover from "./pages/MoviesDiscover.jsx";
import MoviesCategory from "./pages/MoviesCategory.jsx";
import Notify from "./utils/Notify.jsx";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

// Global state for logged user data
export const LoggedUserContext = createContext();

function App() {
  const loggedUser = useGetLoggeduser();
  const { updateUser, error } = useSelector((state) => state.loggeduser);
  const changePasswordData = useSelector(state=> state.changePassword)


  const successMsg = (msg) => toast.success(msg);
  const errorMsg = (msg) => toast.error(msg);

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


  useEffect(()=>{
    if(changePasswordData){
      if(changePasswordData.error){
        if(changePasswordData.error.data){
          errorMsg(changePasswordData.error.data.message)
        }
      }
      if(changePasswordData.data){
        if(changePasswordData.data.data){
          successMsg("Password has been updated");
        }
      }
    }
  },[changePasswordData])

  const router = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "discover",
          element: <MoviesDiscover />,
        },
        {
          path: "top_rated",
          element: <MoviesCategory />,
        },
        {
          path: "upcoming",
          element: <MoviesCategory />,
        },
        {
          path: "search",
          element: <SearchPage />,
        },
        {
          path: "movie/:id",
          element: <DetailsPage />,
        },
        {
          path: "profile/:slug",
          element: <Profile />,
        },
        {
          path: "wishlist",
          element: <Wishlist />,
        },
      ],
    },
    {
      path: "/user",
      Component: AuthLayout,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "forgot-password",
          element: <ForgotPassword />,
        },
        {
          path: "verification-code",
          element: <VerificationCode />,
        },
        {
          path: "reset-password",
          element: <ResetPassword />,
        },
      ],
    },
    {
      path: "*",
      element: <Page404 />,
    },
  ]);

  return (
    <div>
      <LoggedUserContext.Provider value={loggedUser}>
        <RouterProvider router={router} />
      </LoggedUserContext.Provider>
      <Notify />
    </div>
  );
}

export default App;
