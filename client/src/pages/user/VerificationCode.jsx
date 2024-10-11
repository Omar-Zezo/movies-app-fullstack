import {LoginBgImg} from '../../images/imgs/index'
import { useForm } from "react-hook-form"

const VerificationCode = () => {
  const {register,handleSubmit, formState: { errors }} = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div style={{
        background: `url('${LoginBgImg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }}
    className='w-full h-screen flex justify-center items-center px-2'
    >
        <div className='w-[450px] bg-black/90 rounded-lg'>
          <div className='p-10'>
            <h2 className='text-white text-3xl font-bold'>Verification Code</h2>
            <p className='text-sm mt-2 text-slate-100'>Enter the code that was sent to the email</p>
            <form className='mt-8 flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>
              <input className='w-full px-2 py-3 text-base text-white bg-gray-900/20 border border-slate-600 rounded-md' type='text' placeholder='verification code'
              {...register("verificationCode", {required: "verification code is required", minLength:{value: 6, message:"verification code must be more than 6 character"}})}
              />
              <p className='text-red-600'>{errors.verificationCode?.message}</p>
              <input className='w-full px-2 py-3 text-base font-semibold cursor-pointer text-white bg-mainColor rounded-md' value={"Submit"} type='submit' placeholder='Enter Your Password'/>
            </form>
          </div>
        </div>
    </div>
  )
}

export default VerificationCode