import Card from "../components/Card";
import useGetLoggeduser from "../hooks/get-logged-user";
import Pagination from "../utils/Pagination";

const MoviesPage = ({moviesList, handlePageClick, pageNumber, pageCount}) => {
   const loggeduser = useGetLoggeduser()
  return (
    <div className="w-full pt-28 pb-10 max-xl:pb-[80px]">
        <div className="w-full h-full flex justify-center gap-3 flex-wrap">
            {
                moviesList.map((data)=>(
                    <div key={data.id} className="w-[236px] h-[350px] rounded-sm">
                        <Card data={data} userWishlist={loggeduser?.wishlist}/>
                    </div>
                ))
            }
        </div>
        <Pagination handlePageClick={handlePageClick} pageNumber={pageNumber} pageCount={pageCount}/>
    </div>
  )
}

export default MoviesPage