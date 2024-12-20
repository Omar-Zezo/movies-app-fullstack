import Card from "../components/Card";
import useFetchMoviesSearch from "../hooks/fetch-movies-search";
import Pagination from "../utils/Pagination";

const SearchPage = () => {
const { moviesList, pageNumber, pageCount, handlePageClick } = useFetchMoviesSearch();

  return (
    <div className="w-full pt-28 pb-10 max-xl:pb-[80px]">
      <div className="w-full h-full flex justify-center gap-3 flex-wrap">
        {moviesList.map((data) => (
          <div key={data.id} className="w-[236px] h-[350px] rounded-sm">
            <Card data={data} wCard={false}/>
          </div>
        ))}
      </div>
      <Pagination
        handlePageClick={handlePageClick}
        pageNumber={pageNumber}
        pageCount={pageCount}
      />
    </div>
  );
};

export default SearchPage;
