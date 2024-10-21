import {SignupBgImg} from '../../images/imgs/index'
import { useForm } from "react-hook-form"

const ResetPassword = () => {
  const {register,handleSubmit, watch ,formState: { errors }} = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div style={{
        background: `url('${SignupBgImg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }}
    className='w-full h-screen flex justify-center items-center px-2'
    >
        <div className='w-[450px] bg-black/90 rounded-lg'>
          <div className='p-10'>
            <h2 className='text-white text-3xl font-bold'>Reset Password</h2>
            <form className='mt-8 flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>
              <input className='w-full px-2 py-3 text-base text-white bg-gray-900/20 border border-slate-600 rounded-md' type='password' placeholder='Enter New Password'
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
              <input className='w-full px-2 py-3 text-base font-semibold cursor-pointer text-white bg-mainColor rounded-md' value={"Reset"} type='submit'/>
            </form>
          </div>
        </div>
    </div>
  )
}

export default ResetPassword