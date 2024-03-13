import React from "react";
import HeroSection from "../components/HeroSection";
import { Link } from "react-router-dom";

const Home = () => {
  const jobs = [
    {
      id: 1,
      title: "React Developer",
      company: "Accenture India",
      address: "ITC Main,Info Park,Kakkanad",
      city: "Kochi,Kerala",
      salary: "5L-6L",
      email: "kathir@accenture.com",
      phone: "+91-8220191769",
      exp: "1-3 Years",
      np: "15 days",
      expired: "30-03-2024",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
    },
    {
      id: 2,
      title: "Angular Developer",
      company: "IBM India",
      address: "DLF city,Poonamalli Highway",
      city: "Chennai,Tamilnadu",
      salary: "6L-8L",
      email: "kathir@ibmindia.com",
      phone: "+91-8220191769",
      exp: "1-2 Years",
      np: "15 days",
      expired: "20-03-2024",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
    },
  ];
  return (
    <div>
      <HeroSection />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {jobs.map((job, index) => (
          <div key={jobs.id} className="p-4 shadow-sm bg-slate-200 rounded-md">
            <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold text-slate-950">
              {job.title}
            </h1>
            <h3 className="text-md md:text-xl lg:text-xl font-medium my-2 text-slate-800">
              {job.company}
            </h3>
            <div>
              <h2 className="pb-1 text-slate-600text-lg ">
                <span className="font-medium">Salary :</span> {job.salary}
              </h2>
              <h2 className="pb-1 text-slate-600text-lg">
                <span className="font-medium">Year of Experience :</span>
                {job.exp}
              </h2>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-md text-slate-500">
                Expired on : {job.expired}
              </span>
              <Link
                to={`/jobs/${job.id}`}
                className=" mt-2 border-2 text-slate-900 border-slate-900 bg-white rounded-md py-1 px-3 md:block text-md  hover:bg-slate-900 hover:text-white font-semibold"
              >
                View Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
