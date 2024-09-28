import {LoginBgImg} from '../../images/imgs/index'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div style={{
        background: `url('${LoginBgImg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }}
    className='w-screen h-screen flex justify-center items-center px-2'
    >
        <div className='w-[450px] h-[500px] bg-black/90 rounded-lg'>
          <div className='px-10 pt-10'>
            <h2 className='text-white text-3xl font-bold'>Sign in</h2>
            <form className='mt-8 flex flex-col gap-5'>
              <input className='w-full px-2 py-3 text-base text-white bg-gray-900/20 border border-slate-600 rounded-md' type='email' placeholder='Enter Your Email'/>
              <input className='w-full px-2 py-3 text-base text-white bg-gray-900/20 border border-slate-600 rounded-md' type='password' placeholder='Enter Your Password'/>
              <input className='w-full px-2 py-3 text-base font-semibold cursor-pointer text-white bg-mainColor rounded-md' value={"Sign in"} type='submit' placeholder='Enter Your Password'/>
              <p className='text-slate-400 text-center'>OR</p>
              <Link to={"/user/signup"} className='w-full px-2 py-3 text-base text-center font-meduim cursor-pointer text-white bg-zinc-700 rounded-md'>New to Netflix? Sign up now.</Link>
              <Link to="/user/forgot-password" className='text-slate-100 text-center text-base hover:text-zinc-500 hover:underline'>Forgot Password?</Link>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Login