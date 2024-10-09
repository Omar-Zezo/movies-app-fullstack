import useGetLoggeduser from '../hooks/get-logged-user'
import Card from '../components/Card'
import ProtectRoutes from '../hooks/protect-routes'

const Wishlist = () => {
  const userData = useGetLoggeduser()
  ProtectRoutes()
  return (
    <div className="w-full pt-28 pb-10 max-xl:pb-[80px]">
        <div className="w-full h-full flex justify-center gap-3 flex-wrap">
            {
                userData?.wishlist.map((data)=>(
                    <div key={data.id} className="w-[236px] h-[350px] rounded-sm">
                        <Card data={data}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Wishlist