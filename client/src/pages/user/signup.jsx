import {SignupBgImg} from '../../images/imgs/index'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div style={{
        background: `url('${SignupBgImg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }}
    className='w-screen h-screen flex justify-center items-center px-2'
    >
        <div className='w-[450px] bg-black/90 rounded-lg'>
          <div className='p-10'>
            <h2 className='text-white text-3xl font-bold'>Sign up</h2>
            <form className='mt-8 flex flex-col gap-5'>
            <input className='w-full px-2 py-3 text-base text-white bg-gray-900/20 border border-slate-600 rounded-md' type='text' placeholder='Enter Your Name'/>
              <input className='w-full px-2 py-3 text-base text-white bg-gray-900/20 border border-slate-600 rounded-md' type='email' placeholder='Enter Your Email'/>
              <input className='w-full px-2 py-3 text-base text-white bg-gray-900/20 border border-slate-600 rounded-md' type='password' placeholder='Enter Your Password'/>
              <input className='w-full px-2 py-3 text-base text-white bg-gray-900/20 border border-slate-600 rounded-md' type='password' placeholder='Confirme Password'/>
              <input className='w-full px-2 py-3 text-base font-semibold cursor-pointer text-white bg-mainColor rounded-md' value={"Sign up"} type='submit'/>
              <p className='text-slate-400 text-center'>OR</p>
              <Link to={"/user/login"} className='w-full px-2 py-3 text-base text-center font-meduim cursor-pointer text-white bg-zinc-700 rounded-md'>Already have account, Login</Link>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Signup