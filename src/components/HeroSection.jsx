import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="mx-auto py-3 my-12">
      <h1 className="text-2xl md:text-6xl font-bold text-slate-800 text-left">
        Let's hire your next great candidate <strong> Fast</strong>
      </h1>
      <p className="text-md md:text-xl text-slate-600 font-normal my-3 py-1 text-left">
        Finding the best fit for the job shouldn’t be a full-time job. Tech Jobs
        simple and powerful tools let you source, screen and hire faster.
      </p>
      <div className="flex items-center gap-6 mx-2 my-3">
        <Link
          to="/sign-in"
          className="border-2 bg-slate-900 border-slate-900 text-white rounded-md py-2 px-3 md:block text-md  hover:text-slate-900 hover:bg-white font-semibold"
        >
          Login
        </Link>
        <Link
          to="/sign-up"
          className="border-2 border-slate-900 text-slate-900 rounded-md py-2 px-3 md:block text-md  hover:text-slate-50 hover:bg-slate-900 font-semibold"
        >
          Sign Up
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
