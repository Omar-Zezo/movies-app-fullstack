import {LoginBgImg} from '../../images/imgs/index'

const ForgotPassword = () => {
  return (
    <div style={{
        background: `url('${LoginBgImg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }}
    className='w-screen h-screen flex justify-center items-center px-2'
    >
        <div className='w-[450px] bg-black/90 rounded-lg'>
          <div className='p-10'>
            <h2 className='text-white text-3xl font-bold'>Forgot Password</h2>
            <p className='text-sm mt-2 text-slate-100'>Enter your email to send the verification code</p>
            <form className='mt-8 flex flex-col gap-5'>
              <input className='w-full px-2 py-3 text-base text-white bg-gray-900/20 border border-slate-600 rounded-md' type='email' placeholder='Enter Your Email'/>
              <input className='w-full px-2 py-3 text-base font-semibold cursor-pointer text-white bg-mainColor rounded-md' value={"Send Code"} type='submit' placeholder='Enter Your Password'/>
            </form>
          </div>
        </div>
    </div>
  )
}

export default ForgotPassword