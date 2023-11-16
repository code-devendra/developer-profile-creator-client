import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchDevelopers = ({ developerCount, updateSearchTerms }) => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    updateSearchTerms(search);
  }, [search]);
  return (
    <div className="mt-12">
      <h2 className="text-3xl text-center font-medium">
        Explore developer profiles
      </h2>
      {developerCount !== 0 && (
        <>
          <div className=" divider"></div>
          <div className="w-[40%] min-w-[320px] mx-auto py-2 pl-2 bg-light flex justify-start items-center gap-x-4 rounded-md">
            <input
              type="text"
              name="id"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by username or id"
              className="w-full bg-white border border-slate-400 outline-none rounded-md px-2 py-1"
            />
            <button className="text-2xl w-[50px] cursor-default">
              <IoSearchSharp />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchDevelopers;
