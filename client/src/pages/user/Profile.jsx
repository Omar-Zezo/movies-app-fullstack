import { Link } from 'react-router-dom'
import { ProfileImg, ProfileBgImg } from '../../images/imgs'
import { Edit } from '../../images/svg'

export const Profile = () => {
  return (
    <div className='w-screen min-h-screen flex justify-center items-center' style={{
        background: `url('${ProfileBgImg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }}>
        <div className='flex max-lg:flex-col xl:w-[80%] w-full mt-16 rounded-md bg-black/85'>
            <div className='xl:w-[30%] w-full max-lg:h-[500px] bg-slate-900/30 rounded-tl-md rounded-bl-md flex justify-center items-center'>
                <div className='flex flex-col items-center gap-5'>
                    <img className='rounded-full' width={120} height={120} src={ProfileImg} alt='profile'/>
                    <h4 className='text-white text-xl font-meduim'>Omar Abd Elaziz</h4>
                    <div className='flex items-center'>
                        <span className='text-white text-lg font-medium'>Joined Oct 2024</span>
                    </div>
                    <img className='cursor-pointer' width={25} height={25} src={Edit} alt='edit'/>
                </div>
            </div>
            <div className='py-5 px-5 min-h-[500px] xl:px-10'>
            <h3 className='text-white text-xl font-semibold'>Information</h3>
            <div className='flex flex-col gap-4 mt-5'>
               <div className='flex items-center'>
                <h5 className='text-xl text-slate-300 font-semibold'>Email: </h5>
                <p className='text-white text-lg ml-3'>omarabdelazizmohamed408@gmail.com</p>
               </div>
               <div className='flex items-center'>
                <h5 className='text-xl text-slate-300 font-semibold'>Phone Number: </h5>
                <p className='text-white text-lg ml-3'>01096757644</p>
               </div>
            </div>
            <div className='flex items-center mt-5'>
            <h3 className='text-white text-xl font-semibold my-5'>My List</h3>
            <Link className='inline-block ml-auto text-mainColor hover:underline' to={""}>See All</Link>
            </div>
            <div className='flex items-center gap-4 max-lg:flex-col'>
                <div className='xl:w-[220px] w-[90%] h-[300px] bg-orange-500 rounded-md'>ss</div>
                <div className='xl:w-[220px] w-[90%] h-[300px] bg-orange-500 rounded-md'>ss</div>
                <div className='xl:w-[220px] w-[90%] h-[300px] bg-orange-500 rounded-md'>ss</div>
            </div>
            </div>
        </div>
    </div>
  )
}
