import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center p-3 max-w-6xl mx-auto ">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Nepal</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className=" bg-slate-100 rounded-lg p-3 flex items-center  ">
          <input
            type="text"
            placeholder="Search..."
            className="focus:outline-none bg-transparent w-24 sm:w-64"
          />
          <FaSearch className="text-slate-500 " />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="text-slate-700 hover:underline hidden sm:inline ">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="text-slate-700 hover:underline hidden sm:inline ">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="text-slate-700 hover:underline">SignIn</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
