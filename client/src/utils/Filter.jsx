import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMoviesGenre } from "../store/movies/genresSlice";
import { FilterImg } from "../images/svg";
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
    2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013,
    2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001,
    2000, 1999, 1998, 1997, 1996, 1995,
  ];

  return (
    <div className="pl-16 flex items-center gap-5 mb-5">
      <div className="flex items-center gap-2">
        <img width={25} src={FilterImg} alt="filter"/>
      <h3 className="text-white text-xl font-medium">Filter: </h3>
      </div>
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
              }&with_original_language=${languageQuery}`
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
        {/* <label className="text-white font-medium">Year: </label> */}
        <select
          value={yearQuery}
          className="bg-zinc-800 text-white px-5 py-2 text-center"
          onChange={(e) => {
            setYear(e.target.value);
            navigate(
              `?sort_by=${sortByQuery}&year=${e.target.value}${
                genreQuery ? `&with_genres=${genreQuery}` : ``
              }&with_original_language=${languageQuery}`
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
        {/* <label className="text-white font-medium">Genres: </label> */}
        <select
          value={genreQuery}
          className="bg-zinc-800 text-white px-5 py-2 text-center"
          onChange={(e) => {
            setGenre(e.target.value);
            navigate(
              `?sort_by=${sortByQuery}&year=${yearQuery}&with_genres=${e.target.value}&with_original_language=${languageQuery}`
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
        {/* <label className="text-white font-medium">Genres: </label> */}
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
          <option value={""}>Language</option>
          <option value={"en"}>EN</option>
          <option value={"ar"}>Ar</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
