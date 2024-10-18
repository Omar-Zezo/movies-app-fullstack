import {useDispatch} from 'react-redux'
import { useForm } from "react-hook-form";
import { subscribe } from '../store/users/subscribeSlice';

const Subscription = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch()

  const onSubmit = (data)=> dispatch(subscribe(data))


  return (
    <div className="xl:w-[80%] w-[90%] my-[100px] mx-auto">
        <h3 className='text-white font-medium mb-5 text-center'>Ready to subscribe? Enter your email to receive all new updates.</h3>
        <form className='xl:w-[50%] m-auto flex' onSubmit={handleSubmit(onSubmit)}>
            <input className='w-[70%] h-[50px] p-2 text-zinc-700 outline-none border-0 text-base' type="email" placeholder="Email address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            />
            <input className='w-[30%] h-[50px] border-0 bg-mainColor hover:bg-mainColor/80 duration-75 text-white lg:text-xl text-lg font-medium cursor-pointer' type="submit" name="" id="" value="Subscribe"/>
        </form>
        <p className="text-red-600 text-center mt-2">{errors.email?.message}</p>
    </div>
  )
}

export default Subscription