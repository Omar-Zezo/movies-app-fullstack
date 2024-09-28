import {SignupBgImg} from '../../images/imgs/index'
import { Link } from 'react-router-dom'

const ResetPassword = () => {
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
            <h2 className='text-white text-3xl font-bold'>Reset Password</h2>
            <form className='mt-8 flex flex-col gap-5'>
              <input className='w-full px-2 py-3 text-base text-white bg-gray-900/20 border border-slate-600 rounded-md' type='password' placeholder='Enter New Password'/>
              <input className='w-full px-2 py-3 text-base text-white bg-gray-900/20 border border-slate-600 rounded-md' type='password' placeholder='Confirme Password'/>
              <input className='w-full px-2 py-3 text-base font-semibold cursor-pointer text-white bg-mainColor rounded-md' value={"Reset"} type='submit'/>
            </form>
          </div>
        </div>
    </div>
  )
}

export default ResetPassword