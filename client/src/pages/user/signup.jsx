import {SignupBgImg} from '../../images/imgs/index'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import {useSelector} from "react-redux"
import { useEffect } from 'react'
import useGetLoggeduser from '../../hooks/get-logged-user'
import useAuth from '../../hooks/auth-user'
import { signup } from '../../store/users/signupSlice'


const Signup = () => {
  const {register,handleSubmit, watch ,formState: { errors }} = useForm()

  const navigate = useNavigate()

  const signupData = useSelector(state=> state.signup)
  const loggedUser = useGetLoggeduser()
  const onSubmit = useAuth(signupData, signup)

  useEffect(()=>{
    if(loggedUser){
      navigate(`/profile/${loggedUser?.slug}`)
    }
  }, [loggedUser])

  return (
    <div style={{
        background: `url('${SignupBgImg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }}
    className='w-full min-h-screen py-8 px-2'
    >
        <div className='max-lg:w-[98%] w-[450px] mx-auto bg-black/90 rounded-lg'>
          <div className='p-10'>
            <h2 className='text-white text-3xl font-bold'>Sign up</h2>
            <form className='mt-8 flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>
            <input className='w-full px-2 py-3 text-base text-white bg-gray-900/20 border border-slate-600 rounded-md' type='text' placeholder='Enter Your Name'
            {...register("fullName", {required: "Name is required", minLength: {value:3, message: "Full name must be more than 3 charactrs"}})}
            />
            <p className='text-red-600'>{errors.fullName?.message}</p>
              <input className='w-full px-2 py-3 text-base text-white bg-gray-900/20 border border-slate-600 rounded-md' type='email' placeholder='Enter Your Email'
              {...register("email", {required: "Email is required", pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"}})}
              />
              <p className='text-red-600'>{errors.email?.message}</p>
              <input className='w-full px-2 py-3 text-base text-white bg-gray-900/20 border border-slate-600 rounded-md' type='password' placeholder='Enter Your Password'
               {...register("password", {required: "password is required", minLength: {value: 6,
                message: "Password must be more than 6 character"}})}
              />
              <p className='text-red-600'>{errors.password?.message}</p>
              <input className='w-full px-2 py-3 text-base text-white bg-gray-900/20 border border-slate-600 rounded-md' type='password' placeholder='Confirme Password'
              {...register("confirmPassword", {required: "confirm password is required", validate: (val)=>{
                if(val !== watch("password")){
                  return "password and password confirm dosen't match"
                }
              }})}
              />
              <p className='text-red-600'>{errors.confirmPassword?.message}</p>
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