import { useState, useEffect } from "react";
import { getAllDevelopers } from "../requests";
import { IoReloadOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { LuLoader2 } from "react-icons/lu";

import { Link } from "react-router-dom";

const Developers = ({ updateDeveloperCount, search }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalDevelopers, setTotalDevelopers] = useState(0);
  const fetchData = async (searchTerm = "") => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await getAllDevelopers(searchTerm);
      const data = result.data.developers;
      setTotalDevelopers(result.data.developers_count);
      updateDeveloperCount(result.data.developers_count);
      setItems([...data]);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  useEffect(() => {
    fetchData(search);
  }, [search]);

  return (
    <main>
      <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className=" flex justify-start items-center gap-x-3 my-5 p-3 rounded-md hover:bg-light transition-all ease-in-out"
          >
            <img
              src={item.avatar_url}
              width={"60px"}
              height={"60px"}
              className="rounded-full border-2 border-dark mr-3"
              alt={item.id}
            />
            <h4 className=" text-light-dark font-bold">{item.id}</h4>
            <Link
              to={`/${item.id}`}
              className="text-xl text-blue hover:text-2xl transition-all ease-in-out"
            >
              <GoArrowUpRight />
            </Link>
          </div>
        ))}
      </div>
      {isLoading && (
        <div className="text-blue text-3xl text-center w-full py-5 flex justify-center">
          <LuLoader2 className=" animate-spin" />
        </div>
      )}
      <div className="divider"></div>
      {totalDevelopers === 0 ? (
        <h3 className="text-lg font-medium text-center my-3">
          No developers added yet
        </h3>
      ) : (
        <h3 className="text-lg font-medium text-center my-3">
          Could not found what you were looking for?
        </h3>
      )}
      <button
        onClick={() => document.getElementById("my_modal_1").showModal()}
        className="block my-5 w-[200px] mx-auto text-white text-center bg-blue px-7 py-3 rounded-full font-semibold hover:bg-light-dark transition-all ease-in-out"
      >
        Add Developer Info
      </button>
    </main>
  );
};

export default Developers;
