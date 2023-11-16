import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMedium,
  FaHackerrank,
} from "react-icons/fa6";
import { LuLoader2 } from "react-icons/lu";
import { SiCodechef, SiLeetcode, SiCodeforces } from "react-icons/si";
import toast from "react-hot-toast";
import { createDeveloper } from "../requests";

const DeveloperForm = () => {
  const [data, setData] = useState({
    github_id: "",
    linkedin_id: "",
    codechef_id: "",
    hackerrank_id: "",
    twitter_id: "",
    medium_id: "",
    leetcode_id: "",
    codeforces_id: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    if (data.github_id !== "") {
      setError("");
    }
  };
  const submitData = async (e) => {
    e.preventDefault();
    if (data.github_id === "") {
      setError("Github Id is must*");
      return;
    }
    setIsLoading(true);
    try {
      await createDeveloper(data);
      toast.success("Developer is Added");
      document.getElementById("my_modal_1").close();
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <dialog id="my_modal_1" className="modal ">
      <div className="modal-box p-4 w-1/2 min-w-[340px] max-w-[90%] bg-white shadow-md rounded-sm">
        <h2 className="text-2xl font-semibold mt-2">Add Developer Profile</h2>
        <div className="w-full h-[1px] bg-slate-600 rounded-full my-6"></div>
        <form className="w-full pl-4">
          <div className="my-5">
            <label
              htmlFor="github"
              className="flex items-center font-semibold gap-x-2 mb-2"
            >
              <FaGithub className="text-lg" /> Github*
            </label>
            <input
              type="text"
              id="github"
              name="github_id"
              value={data.github_id}
              onChange={handleChange}
              placeholder="Enter Github username or id. Eg- code-devendra"
              className="pl-3 py-[5px] rounded-md w-[80%] outline-none border border-gray-300"
            />
          </div>
          <div className="my-5">
            <label
              htmlFor="linkedin"
              className="flex items-center font-semibold gap-x-2 mb-2"
            >
              <FaLinkedin className=" text-blue text-lg" /> Linkedin
            </label>
            <input
              type="text"
              id="linkedin"
              name="linkedin_id"
              value={data.linkedin_id}
              onChange={handleChange}
              placeholder="Enter Linkedin username or id. Eg- code-devendra"
              className="pl-3 py-[5px] rounded-md w-[80%] outline-none border border-gray-300"
            />
          </div>
          <div className="my-5">
            <label
              htmlFor="leetcode"
              className="flex items-center font-semibold gap-x-2 mb-2"
            >
              <SiLeetcode className=" text-lg" /> Leetcode
            </label>
            <input
              type="text"
              id="leetcode"
              name="leetcode_id"
              value={data.leetcode_id}
              onChange={handleChange}
              placeholder="Enter Leetcode username or id. Eg- code-devendra"
              className="pl-3 py-[5px] rounded-md w-[80%] outline-none border border-gray-300"
            />
          </div>
          <div className="my-5">
            <label
              htmlFor="codechef"
              className="flex items-center font-semibold gap-x-2 mb-2"
            >
              <SiCodechef className="  text-lg" /> Codechef
            </label>
            <input
              type="text"
              id="codechef"
              name="codechef_id"
              value={data.codechef_id}
              onChange={handleChange}
              placeholder="Enter Codechef username or id. Eg- code-devendra"
              className="pl-3 py-[5px] rounded-md w-[80%] outline-none border border-gray-300"
            />
          </div>
          <div className="my-5">
            <label
              htmlFor="codeforces"
              className="flex items-center font-semibold gap-x-2 mb-2"
            >
              <SiCodeforces className="text-red-500 text-lg" /> Codeforces
            </label>
            <input
              type="text"
              id="codeforces"
              name="codeforces_id"
              value={data.codeforces_id}
              onChange={handleChange}
              placeholder="Enter Codeforces username or id. Eg- code-devendra"
              className="pl-3 py-[5px] rounded-md w-[80%] outline-none border border-gray-300"
            />
          </div>
          <div className="my-5">
            <label
              htmlFor="hackerrank"
              className="flex items-center font-semibold gap-x-2 mb-2"
            >
              <FaHackerrank className=" text-green-600 text-lg" /> Hackerrank
            </label>
            <input
              type="text"
              id="hackerrank"
              name="hackerrank_id"
              value={data.hackerrank_id}
              onChange={handleChange}
              placeholder="Enter Hackerrank username or id. Eg- code-devendra"
              className="pl-3 py-[5px] rounded-md w-[80%] outline-none border border-gray-300"
            />
          </div>
          <div className="my-5">
            <label
              htmlFor="medium"
              className="flex items-center font-semibold gap-x-2 mb-2"
            >
              <FaMedium className=" text-lg" /> Medium
            </label>
            <input
              type="text"
              id="medium"
              name="medium_id"
              value={data.medium_id}
              onChange={handleChange}
              placeholder="Enter Medium username or id. Eg- code-devendra"
              className="pl-3 py-[5px] rounded-md w-[80%] outline-none border border-gray-300"
            />
          </div>
          <div className="my-5">
            <label
              htmlFor="twitter"
              className="flex items-center font-semibold gap-x-2 mb-2"
            >
              <FaTwitter className="text-blue text-lg" /> Twitter
            </label>
            <input
              type="text"
              id="twitter"
              name="twitter_id"
              value={data.twitter_id}
              onChange={handleChange}
              placeholder="Enter Twitter username or id. Eg- code-devendra"
              className="pl-3 py-[5px] rounded-md w-[80%] outline-none border border-gray-300"
            />
          </div>
        </form>
        {error && (
          <div className="alert alert-error mt-5 rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}</span>
          </div>
        )}
        <div className="w-full h-[1px] bg-slate-400 rounded-full my-6"></div>
        <div className="w-full my-5 flex justify-end gap-1">
          <button
            className="px-5 py-2 font-semibold"
            onClick={() => document.getElementById("my_modal_1").close()}
          >
            Cancel
          </button>
          <button
            onClick={submitData}
            className=" bg-blue px-5 py-2 text-white rounded-full font-semibold hover:bg-light-dark transition-all ease-in-out flex gap-2 items-center"
          >
            Submit{" "}
            {isLoading && <LuLoader2 className="text-white animate-spin" />}
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default DeveloperForm;
