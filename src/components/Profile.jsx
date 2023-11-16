import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { getDeveloper } from "../requests";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMedium,
  FaHackerrank,
  FaLocationDot,
  FaBuilding,
} from "react-icons/fa6";
import { SiCodechef, SiLeetcode, SiCodeforces } from "react-icons/si";
import { MdEmail, MdLink, MdRemoveRedEye } from "react-icons/md";
import { LuLoader2 } from "react-icons/lu";
import GithubRepos from "./GithubRepos";

const Profile = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const fetchData = async (id) => {
    setIsLoading(true);
    try {
      const result = await getDeveloper(id);
      console.log(result.data);
      setData(result.data.developerInfo);
    } catch (error) {
      navigate("/error/page");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData(params.id);
  }, []);
  return (
    <main>
      <Navbar />
      {isLoading ? (
        <div className="text-blue text-4xl text-center w-full pt-32 flex justify-center">
          <LuLoader2 className=" animate-spin" />
        </div>
      ) : (
        <>
          <header className="w-full px-[5%] md:px-[10%] py-8 bg-light flex flex-col md:flex-row gap-12 items-center mb-8">
            <img
              src={data.avatar_url}
              alt={data.name}
              className="w-[70%] max-w-xs rounded-full border-2 border-dark"
            />
            <article>
              <h2 className="text-2xl font-semibold mb-3">{data.name}</h2>
              <p className="text-lg mb-4">{data.bio}</p>
              <div className="flex items-center gap-3 text-xl mb-4">
                {data.github_id && (
                  <a
                    href={`https://github.com/${data.github_id}`}
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                )}
                {data.linkedin_id && (
                  <a
                    href={`https://linkedin.com/in/${data.linkedin_id}`}
                    target="_blank"
                    className="text-blue"
                  >
                    <FaLinkedin />
                  </a>
                )}
                {data.leetcode_id && (
                  <a
                    href={`https://leetcode.com/${data.leetcode_id}`}
                    target="_blank"
                  >
                    <SiLeetcode />
                  </a>
                )}
                {data.codechef_id && (
                  <a
                    href={`https://codechef.com/users/${data.codechef_id}`}
                    target="_blank"
                  >
                    <SiCodechef />
                  </a>
                )}
                {data.codeforces_id && (
                  <a
                    href={`https://codeforces.com/profile/${data.codeforces_id}`}
                    target="_blank"
                    className="text-red-600"
                  >
                    <SiCodeforces />
                  </a>
                )}
                {data.hackerrank_id && (
                  <a
                    href={`https://www.hackerrank.com/profile/${data.hackerrank_id}`}
                    target="_blank"
                    className="text-green-600"
                  >
                    <FaHackerrank />
                  </a>
                )}
                {data.medium_id && (
                  <a
                    href={`https://${data.medium_id}.medium.com`}
                    target="_blank"
                  >
                    <FaMedium />
                  </a>
                )}
                {data.twitter_id && (
                  <a
                    href={`https://twitter.com/${data.twitter_id}`}
                    target="_blank"
                    className="text-blue-600"
                  >
                    <FaTwitter />
                  </a>
                )}
                {data.email && (
                  <a href={`mailto:${data.email}`} target="_blank">
                    <MdEmail />
                  </a>
                )}
              </div>
              <div className="flex items-center gap-3 mb-3">
                {data.location && (
                  <div className="flex items-center gap-1 text-xl">
                    <FaLocationDot />
                    <p className="text-base">{data.location}</p>
                  </div>
                )}
                {data.company && (
                  <div className="flex items-center gap-1 text-xl">
                    <FaBuilding />
                    <p className="text-base">{data.company}</p>
                  </div>
                )}
                {data.blog && (
                  <div className="flex items-center gap-1 text-xl">
                    <MdLink />
                    <p className="text-base">{data.blog}</p>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-1 text-xl font-semibold">
                <MdRemoveRedEye className="text-blue" />
                <p>{data.view_count}+</p>
              </div>
            </article>
          </header>
          <h1 className="my-5 text-3xl font-semibold text-center">
            Github repositories
          </h1>
          <div className="divider"></div>
          {data && <GithubRepos repos={data.repos} />}
        </>
      )}
    </main>
  );
};

export default Profile;
