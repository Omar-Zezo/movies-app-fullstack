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


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" Component={Layout}>
        <Route index element={<Home/>}/>
        <Route path="movie/:id" element={<DetailsPage/>}/>
        <Route path="profile" element={<Profile/>}/>
      </Route>
      <Route path="/user">
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="forgot-password" element={<ForgotPassword/>}/>
        <Route path="verification-code" element={<VerificationCode/>}/>
        <Route path="reset-password" element={<ResetPassword/>}/>
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
