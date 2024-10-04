import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetailsPage from "./pages/DetailsPage";
import Login from "./pages/user/Login";
import Layout from "./pages/Layout";
import Signup from "./pages/user/signup";
import ForgotPassword from "./pages/user/ForgotPassword";
import VerificationCode from "./pages/user/VerificationCode";
import ResetPassword from "./pages/user/ResetPassword";
import { Profile } from "./pages/user/Profile";
import ScrollToTop from "./utils/ScrollToTop";
import Discover from "./pages/Discover";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
import SearchPage from "./pages/SearchPage";
import Wishlist from "./pages/Wishlist";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop>
      <Routes>
      <Route path="/" Component={Layout}>
        <Route index element={<Home/>}/>
        <Route path="movies" element={<Discover/>}/>
        <Route path="top-rated" element={<TopRated/>}/>
        <Route path="upcoming" element={<Upcoming/>}/>
        <Route path="search" element={<SearchPage/>}/>
        <Route path="movie/:id" element={<DetailsPage/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="wishlist" element={<Wishlist/>}/>
      </Route>
      <Route path="/user">
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="forgot-password" element={<ForgotPassword/>}/>
        <Route path="verification-code" element={<VerificationCode/>}/>
        <Route path="reset-password" element={<ResetPassword/>}/>
      </Route>
      </Routes>
      </ScrollToTop>
      </BrowserRouter>
    </div>
  )
}

export default App
