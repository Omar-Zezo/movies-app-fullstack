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
import MoviesCategory from "./pages/MoviesCategory.jsx";
import { createContext } from "react";

// Global state for logged user
export const LoggedUserContext = createContext()

function App() {
const loggedUser = useGetLoggeduser()
const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "popular",
        element: <MoviesCategory/>,
      },
      {
        path: "top_rated",
        element: <MoviesCategory/>,
      },
      {
        path: "upcoming",
        element: <MoviesCategory/>,
      },
      {
        path: "search",
        element: <SearchPage/>,
      },
      {
        path: "movie/:id",
        element: <DetailsPage/>,
      },
      {
        path: "profile/:slug",
        element: <Profile/>,
      },
      {
        path: "wishlist",
        element: <Wishlist/>,
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
]);

  return (
    <div>
    <LoggedUserContext.Provider value={loggedUser}>
      <RouterProvider router={router} />
    </LoggedUserContext.Provider>
    </div>
  );
}

export default App;
