import useFetchMoviesDiscover from "../hooks/fetch-movies-discover";
import Pagination from "../utils/Pagination";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import Filter from "../utils/Filter";

const MoviesDiscover = () => {
  const [queryStr, setQueryStr] = useState('')
  const [year, setYear] = useState(null)
  const [sortBy, setSortBy] = useState(null)
  const [genre, setGenre] = useState(null)
  const [language, setLanguage] = useState(null)

  const { moviesList, pageNumber, pageCount, handlePageClick, yearQuery, languageQuery, sortByQuery, genreQuery } =
  useFetchMoviesDiscover(queryStr);


  useEffect(()=>{
    console.log(year)
    console.log(sortBy)
    console.log(genre)
    console.log(language)
    setQueryStr(`sort_by=${sortBy}&year=${year}&with_genres=${genre}&with_original_language=${language}`)
  },[year, sortBy, genre, language])
  
  return (
    <div className="w-full pt-28 pb-10 max-xl:pb-[80px] overflow-x-hidden">
      <Filter 
      setSortBy={setSortBy} 
      setYear={setYear}
      setGenre={setGenre}
      setLanguage={setLanguage}
      yearQuery={yearQuery} 
      sortByQuery ={sortByQuery}
      genreQuery={genreQuery}
      languageQuery={languageQuery}
      />
      <div className="w-full h-full flex justify-center gap-3 flex-wrap">
        {moviesList.map((data) => (
          <div key={data.id} className="w-[236px] h-[350px] rounded-sm">
            <Card data={data} wCard={false} />
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

export default MoviesDiscover;
