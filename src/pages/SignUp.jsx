import { GiArchiveRegister } from "react-icons/gi";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section className="p-5">
      <h1 className="flex flex-row justify-center items-center gap-2 text-3xl font-semibold py-3">
        <GiArchiveRegister />
        Sign Up
      </h1>
      <form action="" className="max-w-xl mx-auto grid grid-cols-1">
        <div className=" py-2 flex flex-col gap-2">
          <label htmlFor="" className="text-slate-700 font-semibold">
            Name
          </label>
          <input
            type="text"
            name=""
            id=""
            className="bg-slate-300 py-2 px-2 rounded-md focus:outline-none"
          />
        </div>
        <div className=" py-2 flex flex-col gap-2">
          <label htmlFor="" className="text-slate-700 font-semibold">
            Email
          </label>
          <input
            type="email"
            name=""
            id=""
            className="bg-slate-300 py-2 px-2 rounded-md focus:outline-none"
          />
        </div>
        <div className=" py-2 flex flex-col gap-2">
          <label htmlFor="" className="text-slate-700 font-semibold">
            Password
          </label>
          <input
            type="password"
            name=""
            id=""
            className="bg-slate-300 py-2 px-2 rounded-md focus:outline-none"
          />
        </div>
        <div className=" py-2 flex flex-col gap-2">
          <label htmlFor="" className="text-slate-700 font-semibold">
            Confirm Password
          </label>
          <input
            type="password"
            name=""
            id=""
            className="bg-slate-300 py-2 px-2 rounded-md focus:outline-none"
          />
        </div>
        <div className="flex my-2 justify-end items-center gap-3">
          <button className="border-2 bg-slate-900 border-slate-900 text-white rounded-md py-2 px-3 md:block text-md  font-semibold">
            Sign Up
          </button>
          <Link
            to="/"
            className="border-2 border-slate-900 text-slate-900 rounded-md py-2 px-3 md:block text-md  hover:text-slate-50 hover:bg-slate-900 font-semibold"
          >
            Cancel
          </Link>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
