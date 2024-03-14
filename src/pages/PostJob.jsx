import React from "react";
import { Link } from "react-router-dom";

const PostJob = () => {
  return (
    <section className="p-5">
      <form action="" className="grid grid-cols-1 md:grid-cols-2 md:gap-3">
        <div className=" py-2 flex flex-col gap-2">
          <label htmlFor="" className="text-slate-700 font-semibold">
            Job Title
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
            Company Name
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
            Website URL
          </label>
          <input
            type="url"
            name=""
            id=""
            className="bg-slate-300 py-2 px-2 rounded-md focus:outline-none"
          />
        </div>
        <div className=" py-2 flex flex-col gap-2">
          <label htmlFor="" className="text-slate-700 font-semibold">
            Contact Person
          </label>
          <input
            type="text"
            name=""
            id=""
            className="bg-slate-300 py-2 px-2 rounded-md focus:outline-none"
          />
        </div>
        <div className="py-2 flex flex-col gap-2">
          <label htmlFor="" className="text-slate-700 font-semibold">
            Address
          </label>
          <input
            type="text"
            name=""
            id=""
            className="bg-slate-300 py-2 px-2 rounded-md focus:outline-none"
          />
        </div>
        <div className="py-2 flex flex-col gap-2">
          <label htmlFor="" className="text-slate-700 font-semibold">
            City
          </label>
          <input
            type="text"
            name=""
            id=""
            className="bg-slate-300 py-2 px-2 rounded-md focus:outline-none"
          />
        </div>
        <div className="py-2 flex flex-col gap-2">
          <label htmlFor="" className="text-slate-700 font-semibold">
            Salary
          </label>
          <input
            type="text"
            name=""
            id=""
            className="bg-slate-300 py-2 px-2 rounded-md focus:outline-none"
          />
        </div>
        <div className="py-2 flex flex-col gap-2">
          <label htmlFor="" className="text-slate-700 font-semibold">
            Conatct Email
          </label>
          <input
            type="email"
            name=""
            id=""
            className="bg-slate-300 py-2 px-2 rounded-md focus:outline-none"
          />
        </div>
        <div className="py-2 flex flex-col gap-2">
          <label htmlFor="" className="text-slate-700 font-semibold">
            Phone
          </label>
          <input
            type="text"
            name=""
            id=""
            className="bg-slate-300 py-2 px-2 rounded-md focus:outline-none"
          />
        </div>
        <div className="py-2 flex flex-col gap-2">
          <label htmlFor="" className="text-slate-700 font-semibold">
            Year of Experience
          </label>
          <input
            type="text"
            name=""
            id=""
            className="bg-slate-300 py-2 px-2 rounded-md focus:outline-none"
          />
        </div>
        <div className="py-2 flex flex-col gap-2">
          <label htmlFor="" className="text-slate-700 font-semibold">
            Notice Period
          </label>
          <input
            type="text"
            name=""
            id=""
            className="bg-slate-300 py-2 px-2 rounded-md focus:outline-none"
          />
        </div>

        <div className="py-2 flex flex-col gap-2">
          <label htmlFor="" className="text-slate-700 font-semibold">
            Expired On
          </label>
          <input
            type="date"
            name=""
            id=""
            className="bg-slate-300 py-2 px-2 rounded-md focus:outline-none text-slate-700"
          />
        </div>
        <div className="py-2 flex flex-col gap-2">
          <label htmlFor="" className="text-slate-700 font-semibold">
            Job Description
          </label>
          <textarea
            type="text"
            name=""
            id=""
            rows={5}
            className="bg-slate-300 py-2 px-2 rounded-md focus:outline-none"
          ></textarea>
        </div>
        <div className="py-2 flex flex-col gap-2">
          <label htmlFor="" className="text-slate-700 font-semibold">
            Company Profile
          </label>
          <textarea
            type="text"
            name=""
            id=""
            rows={5}
            className="bg-slate-300 py-2 px-2 rounded-md focus:outline-none"
          ></textarea>
        </div>

        <div className="flex my-2 justify-start items-center gap-3">
          <button className="border-2 bg-slate-900 border-slate-900 text-white rounded-md py-2 px-3 md:block text-md  font-semibold">
            Post Job
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

export default PostJob;
