import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = ({openSearch, setOpenSearch}) => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?keyword=${searchValue}&page=${1}`);
  };


  return (
    <div
      className={`fixed w-full min-h-screen top-0 left-0 z-50 bg-black/90 ${
        openSearch ? "block" : "hidden"
      }`}
      onClick={() => setOpenSearch(false)}
    >
      <form
        className="w-[95%] xl:w-1/2 mt-[80px] mx-auto flex flex-col items-center gap-5"
        onSubmit={onSubmit}
      >
        <input
          className="w-full rounded-md outline-none border-none py-5 px-3 bg-zinc-800 text-white"
          type="search"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        />
        <input
          type="submit"
          value={"Search"}
          className="p-3 w-[25%] cursor-pointer rounded-md bg-mainColor text-white"
        />
      </form>
    </div>
  );
};

export default Search;
