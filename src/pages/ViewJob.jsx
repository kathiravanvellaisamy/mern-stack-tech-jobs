import React from "react";
import { Link } from "react-router-dom";

const ViewJob = () => {
  const jobs = [
    {
      id: 1,
      title: "React Developer",
      company: "Accenture India",
      website: "https://accenture.com",
      address: "ITC Main,Info Park,Kakkanad",
      city: "Kochi,Kerala",
      salary: "5L-6L",
      email: "kathir@accenture.com",
      phone: "+91-8220191769",
      exp: "1-3 Years",
      np: "15 days",
      expired: "30-03-2024",
      postedOn: "2days ago",
      profile:
        " Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
    },
  ];
  return (
    <section className="p-1">
      {jobs.map((job, index) => (
        <div className="border border-slate-200 rounded-xl p-3 my-5">
          <div className="my-5 flex gap-4 justify-end items-center">
            <Link
              to={`mailto:${job.email}`}
              className="border-2 bg-slate-900 border-slate-900 text-white rounded-md py-1 px-3 md:block text-md  font-semibold"
            >
              Apply Job
            </Link>
            <Link
              to={job.website}
              className="border-2 border-slate-900 text-slate-900 rounded-md py-1 px-3 md:block text-md  hover:text-slate-50 hover:bg-slate-900 font-semibold"
            >
              Visit Website
            </Link>
            <Link
              to="/"
              className="hidden md:block lg:block border-2 bg-slate-500 border-slate-500 text-white rounded-md py-1 px-3  text-md  font-semibold hover:bg-white hover:text-slate-500"
            >
              All Jobs
            </Link>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row items-baseline md:gap-5 lg:gap-5">
            <h1 className="text-slate-600 font-bold text-4xl">{job.title}</h1>
            <span>Posted : {job.postedOn}</span>
          </div>
          <h2 className="text-slate-600 font-medium text-xl mt-3">
            Job Description:
          </h2>
          <p className="mt-2 text-md text-slate-700 leading-6">
            {job.description}
          </p>

          <div className="mt-3 flex flex-col items-start md:flex-row lg:flex-row justify-between ">
            <div className="flex   items-baseline ">
              <h2 className="text-xl text-left font-semibold text-slate-600">
                Salary :
              </h2>
              <p className="mt-2 text-md text-slate-700 font-semibold leading-6">
                {job.salary}
              </p>
            </div>
            <div className="flex   items-baseline ">
              <h2 className="text-xl font-semibold text-slate-600">
                Year of Experience :{" "}
              </h2>
              <p className="mt-2 text-md text-slate-700 font-semibold leading-6">
                {job.exp}
              </p>
            </div>
            <div className="flex gap-2 items-baseline ">
              <h2 className="text-xl font-semibold text-slate-600">
                Notice Period :
              </h2>
              <p className="mt-2 text-md text-slate-700 font-semibold leading-6">
                {job.np}
              </p>
            </div>
          </div>
          <h2 className="text-slate-600 font-medium text-xl mt-5">
            Company Details:
          </h2>
          <p className="mt-2 text-md text-slate-700 leading-5">{job.company}</p>
          <p className="mt-2 text-md text-slate-700 leading-5">
            Profile : {job.profile}
          </p>
          <p className="mt-2 text-md text-slate-700 leading-5">{job.address}</p>
          <p className="mt-2 text-md text-slate-700 leading-5">
            Contact Number : {job.phone}
          </p>
          <div className="my-5 flex gap-4 justify-end items-center">
            <p className="text-md text-slate-600 font-normal">
              Expired on <span>{job.expired}</span>
            </p>
            <Link
              to="/"
              className="border-2 bg-slate-500 border-slate-500 text-white rounded-md py-1 px-3  text-md  font-semibold hover:bg-white hover:text-slate-500"
            >
              Go Back
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ViewJob;
