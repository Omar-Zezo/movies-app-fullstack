import Card from "../components/Card";
import Pagination from "../utils/Pagination";

const MoviesPage = ({moviesList, handlePageClick, pageNumber, pageCount}) => {
  return (
    <div className="w-full pt-28 pb-10">
        <div className="w-full h-full flex justify-center gap-3 flex-wrap">
            {
                moviesList.map((data)=>(
                    <div key={data.id} className="w-[300px] h-[350px] rounded-sm">
                        <Card data={data}/>
                    </div>
                ))
            }
        </div>
        <Pagination handlePageClick={handlePageClick} pageNumber={pageNumber} pageCount={pageCount}/>
    </div>
  )
}

export default MoviesPage