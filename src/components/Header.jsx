import React from "react";
import { Link } from "react-router-dom";
import { LuComputer } from "react-icons/lu";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-sm w-full py-2">
      <div className="max-w-5xl mx-auto px-9 my-2">
        <nav className="flex items-center justify-between">
          <Link to="/">
            <div className="flex items-center gap-2">
              <LuComputer size={35} />
              <h1 className="text-3xl font-extrabold text-slate-900">
                Tech Jobs
              </h1>
            </div>
          </Link>

          <div className="flex items-center gap-5">
            <Link
              to="/"
              className="hidden md:block text-md  text-slate-900  hover:text-slate-700 font-semibold"
            >
              Home
            </Link>
            <Link
              to="/post-job"
              className="border-2 border-slate-900 text-slate-900 rounded-md py-1 px-3 md:block text-md  hover:text-slate-50 hover:bg-slate-900 font-semibold"
            >
              Post Job
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
