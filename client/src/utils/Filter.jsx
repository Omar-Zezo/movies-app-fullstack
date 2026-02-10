import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMoviesGenre } from "../store/movies/genresSlice";
import { Close, FilterImg } from "../images/svg";
const Filter = ({
  setSortBy,
  setYear,
  setGenre,
  setLanguage,
  yearQuery,
  sortByQuery,
  genreQuery,
  languageQuery
}) => {
  const [moviesGener, setMoviesGener] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const genreMoviesData = useSelector((state) => state.genre.data);

  useEffect(() => {
    dispatch(getMoviesGenre());
  }, []);

  useEffect(() => {
    if (genreMoviesData.data) {
      if (genreMoviesData.data) {
        setMoviesGener(genreMoviesData.data.genres);
      }
    }
  }, [genreMoviesData]);

  const years = [
    2026,2025,2024 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013,
    2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001,
    2000, 1999, 1998, 1997, 1996, 1995,
  ];

  return (
    <div className="xl:pl-16 pl-8 mb-5 flex items-center gap-3">
      <div className="flex items-center gap-2"
      onClick={()=>{
        setShowFilter(!showFilter)
      }}
      >
        <img width={25} src={FilterImg} alt="filter"/>
        <h3 className="text-white text-xl font-medium">Filter: </h3>
      </div>
      <div className={`flex max-md:flex-col max-md:pt-20 items-center gap-5 max-md:bg-zinc-900 max-md:fixed z-50 ${showFilter ? 'left-0': 'left-[-50%]'} duration-75 top-0 max-md:w-[50%] max-md:h-full`}>
        <img className="md:hidden mb-10" width={20} src={Close} alt="close-filter" onClick={()=> setShowFilter(false)}/>
      <div>
        {/* sort by */}
        <select
          value={sortByQuery}
          className="bg-zinc-800 text-white px-5 py-2 text-center"
          onChange={(e) => {
            setSortBy(e.target.value);
            navigate(
              `?sort_by=${e.target.value}&year=${yearQuery}${
                genreQuery ? `&with_genres=${genreQuery}` : ``
              }&with_original_language=${languageQuery ? languageQuery: "en"}`
            );
          }}
        >
          <option value={""}>Sort By</option>
          <option value={"primary_release_date.desc"}>Primary Release</option>
          <option value={"vote_average.desc"}>Top Rated</option>
        </select>
      </div>
      <div className="">
        {/* year */}
        <select
          value={yearQuery}
          className="bg-zinc-800 text-white px-5 py-2 text-center"
          onChange={(e) => {
            setYear(e.target.value);
            navigate(
              `?sort_by=${sortByQuery}&year=${e.target.value}${
                genreQuery ? `&with_genres=${genreQuery}` : ``
              }&with_original_language=${languageQuery ? languageQuery: "en"}`
            );
          }}
        >
          <option value={""}>Year</option>
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
      <div>
        {/* genre */}
        <select
          value={genreQuery}
          className="bg-zinc-800 text-white px-5 py-2 text-center"
          onChange={(e) => {
            setGenre(e.target.value);
            navigate(
              `?sort_by=${sortByQuery}&year=${yearQuery}&with_genres=${e.target.value}&with_original_language=${languageQuery ? languageQuery: "en"}`
            );
          }}
        >
          <option value={""}>Genres</option>
          {moviesGener.map((gen) => (
            <option key={gen.id} value={`${gen.id}`}>
              {gen.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        {/* language */}
        <select
          value={languageQuery}
          className="bg-zinc-800 text-white px-5 py-2 text-center"
          onChange={(e) => {
            setLanguage(e.target.value);
            navigate(
              `?sort_by=${sortByQuery}&year=${yearQuery}${genreQuery ? `&with_genres=${genreQuery}`:''}&with_original_language=${e.target.value}`
            );
          }}
        >
          {/* <option value={""}>Language</option> */}
          <option value={"en"}>English</option>
          <option value={"ar"}>Arabic</option>
        </select>
      </div>
      </div>
    </div>
  );
};

export default Filter;
