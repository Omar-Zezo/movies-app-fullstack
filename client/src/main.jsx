import { createRoot } from 'react-dom/client'
import '../index.css'
import {Provider} from 'react-redux'
import store from './store'
import {createBrowserRouter, RouterProvider} from "react-router-dom" 
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import Discover from './pages/Discover.jsx'
import TopRated from './pages/TopRated.jsx'
import Upcoming from './pages/Upcoming.jsx'
import SearchPage from './pages/SearchPage.jsx'
import DetailsPage from './pages/DetailsPage.jsx'
import Profile from './pages/user/Profile.jsx'
import Wishlist from './pages/Wishlist.jsx'
import AuthLayout from './pages/authLayout.jsx'
import Login from './pages/user/Login.jsx'
import Signup from './pages/user/signup.jsx'
import ForgotPassword from './pages/user/ForgotPassword.jsx'
import VerificationCode from './pages/user/VerificationCode.jsx'
import ResetPassword from './pages/user/ResetPassword.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "discover",
                element: <Discover/>
            },
            {
                path: "top-rated",
                element: <TopRated/>
            },
            {
                path: "upcoming",
                element: <Upcoming/>
            },
            {
                path: "search",
                element: <SearchPage/>
            },
            {
                path: "movie/:id",
                element: <DetailsPage/>
            },
            {
                path: "profile/:slug",
                element: <Profile/>
            },
            {
                path: "wishlist",
                element: <Wishlist/>
            },
        ]
    },
    {
        path: "/user",
        Component: AuthLayout,
        children: [
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "signup",
                element: <Signup/>
            },
            {
                path: "forgot-password",
                element: <ForgotPassword/>
            },
            {
                path: "verification-code",
                element: <VerificationCode/>
            },
            {
                path: "reset-password",
                element: <ResetPassword/>
            },
        ]
    }
])


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
)
