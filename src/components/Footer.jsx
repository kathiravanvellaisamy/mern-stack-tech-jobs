import { Link } from "react-router-dom";
import { LuComputer } from "react-icons/lu";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const ItemOne = [
    { id: 1, name: "About Us" },
    { id: 2, name: "Careers" },
    { id: 3, name: "Emplyer Home" },
    { id: 4, name: "View All Jobs" },
    { id: 5, name: "Sitemap" },
  ];

  const ItemTwo = [
    { id: 1, name: "Help Center" },
    { id: 2, name: "Summons/Notices" },
    { id: 3, name: "Grievances" },
    { id: 4, name: "Report issue" },
    { id: 5, name: "Credits" },
  ];

  const ItemThree = [
    { id: 1, name: "Privacy policy" },
    { id: 2, name: "Terms & conditions" },
    { id: 3, name: "Fraud alert" },
    { id: 4, name: "Trust & safety" },
  ];
  return (
    <footer className="border-t border-slate-400 mt-5">
      <div className="p-5 my-5 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 gap-1 px-8 md:px-16 lg:px-16">
        <div className="p-3 flex flex-col gap-3">
          <Link to="/">
            <div className="flex items-center gap-2">
              <LuComputer size={35} />
              <h1 className="text-3xl font-extrabold text-slate-900">
                Tech Jobs
              </h1>
            </div>
          </Link>
          <h2 className="text-xl text-slate-600 text-md font-medium">
            Connect with us
          </h2>
          <div className="flex gap-5 items-center">
            <FaFacebookSquare
              size={20}
              className="text-slate-500 hover:text-slate-800 cursor-pointer"
            />
            <FaInstagramSquare
              size={20}
              className="text-slate-500 hover:text-slate-800 cursor-pointer"
            />
            <FaTwitterSquare
              size={20}
              className="text-slate-500 hover:text-slate-800 cursor-pointer"
            />
            <FaLinkedin
              size={20}
              className="text-slate-500 hover:text-slate-800 cursor-pointer"
            />
          </div>
        </div>
        <div className="p-3 flex flex-col gap-1">
          {ItemOne.map((item) => (
            <p className="cursor-pointer text-slate-600 text-md font-medium">
              {item.name}
            </p>
          ))}
        </div>
        <div className="p-3 flex flex-col gap-1">
          {ItemTwo.map((item) => (
            <p className="cursor-pointer text-slate-600 text-md font-medium">
              {item.name}
            </p>
          ))}
        </div>
        <div className="p-3 flex flex-col gap-1">
          {ItemThree.map((item) => (
            <p className="cursor-pointer text-slate-600 text-md font-medium">
              {item.name}
            </p>
          ))}
        </div>
        <div className="p-3 flex flex-col gap-1 border border-slate-300 rounded-xl">
          <h2 className="text-xl">Apply on the go </h2>
          <p className="text-sm text-slate-600 ">
            Get real-time job updates on our App
          </p>

          <div className="flex md:flex-col lg:flex-col flex-row gap-2 items-center">
            <img
              src="https://static.naukimg.com/s/0/0/i/new-homepage/android-app_v1.png"
              alt=""
              srcset=""
              className="w-32"
            />
            <img
              src="https://static.naukimg.com/s/0/0/i/new-homepage/ios-app_v1.png"
              alt=""
              srcset=""
              className="w-32"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-700 py-3">
        <p className="text-md text-center text-slate-50">
          &copy; 2024 Tech Jobs
        </p>
      </div>
    </footer>
  );
};

export default Footer;
