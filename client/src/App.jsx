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
import { createContext } from "react";
import Page404 from "./pages/Page404.jsx";
import MoviesDiscover from "./pages/MoviesDiscover.jsx";
import MoviesCategory from "./pages/MoviesCategory.jsx";
import Notify from "./utils/Notify.jsx";
import useNotifications from "./hooks/notifications.js";


// Global state for logged user data
export const LoggedUserContext = createContext();

function App() {
  useNotifications()
  const loggedUser = useGetLoggeduser();

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
