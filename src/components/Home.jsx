import { useState } from "react";
import HERO from "../assets/hero.svg";
import Developers from "./Developers";
import Footer from "./Footer";
import SearchDevelopers from "./SearchDevelopers";

const Home = () => {
  const [totalDeveloperCount, setTotalDeveloperCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main>
      <header className="h-full min-h-[60vh] bg-dark py-[40px] grid grid-cols-1 text-center md:text-start md:grid-cols-2 gap-4 items-center px-[5vw]">
        <section className="text-white">
          <h1 className="text-2xl md:text-5xl font-bold tracking-wide mb-4">
            The Developer Repository
          </h1>
          <p className=" text-light mb-5">
            Be a part of this developer zone by creating a developer profile for
            yourself.
          </p>
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className=" bg-blue px-7 py-3 rounded-full font-semibold hover:bg-light-dark transition-all ease-in-out"
          >
            Create One
          </button>
        </section>
        <section className="h-[80%]">
          <img
            src={HERO}
            alt="developer profile creator"
            className="w-full h-full"
          />
        </section>
      </header>
      <SearchDevelopers
        developerCount={totalDeveloperCount}
        updateSearchTerms={(term) => setSearchTerm(term)}
      />
      <Developers
        updateDeveloperCount={(count) => setTotalDeveloperCount(count)}
        search={searchTerm}
      />
      <Footer />
    </main>
  );
};

export default Home;
