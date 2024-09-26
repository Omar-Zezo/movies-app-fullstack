import React from 'react'

const Subscription = () => {
  return (
    <div className="xl:w-[80%] w-[90%] my-[100px] mx-auto">
        <h3 className='text-white font-medium mb-5 text-center'>Ready to watch? Enter your email to create or restart your membership.</h3>
        <form className='xl:w-[50%] m-auto flex '>
            <input className='w-[70%] h-[50px] p-2 text-zinc-700 outline-none border-0 text-base' type="email" placeholder="Email address"/>
            <input className='w-[30%] h-[50px] border-0 bg-mainColor text-white lg:text-xl text-lg font-medium cursor-pointer' type="submit" name="" id="" value="Get Started"/>
        </form>
    </div>
  )
}

export default Subscription