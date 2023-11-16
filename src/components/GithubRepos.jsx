import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import moment from "moment";

const GithubRepos = ({ repos }) => {
  return (
    <>
      {repos &&
        repos.map((repo, i) => (
          <article
            className="pl-[3%] pr-[2%] md:pr-[5%] md:pl-[6%] my-6"
            key={i}
          >
            <div className="flex items-center gap-4 text-lg mb-2">
              <a
                href={repo.html_url}
                target="_blank"
                className="text-blue font-semibold flex items-center text-xl"
              >
                {repo.name} <GoArrowUpRight />
              </a>
              <p className="text-slate-400">
                Updated On{" "}
                {moment(new Date(repo.updated_at)).format("MMMM d, YYYY")}
              </p>
            </div>
            <p>{repo.description}</p>
            {i !== repos.length - 1 && (
              <div className="w-full h-[1px] bg-gray-400 my-5"></div>
            )}
          </article>
        ))}
    </>
  );
};

export default GithubRepos;
