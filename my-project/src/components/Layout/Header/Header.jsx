import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthProvid } from "../../AuthProviders/AuthProviders";
import { FaUserLarge } from "react-icons/fa6";
import teachers from "../../../assets/teacher_18236544.png";

const Header = () => {
  const { users, handleSingOut } = useContext(AuthProvid);
  const handleSingOuts = () => {
    handleSingOut()
      .then((result) => {})
      .catch((error) => {});
  };

  return (
    <div className="bg-gray-200 ">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
              <NavLink
                className={({ isActive }) =>
                  isActive &&
                  "font-bold bg-gradient-to-r from-red-300  to-red-500 px-4 py-1 rounded-md"
                }
                to={"/"}
              >
                Home
              </NavLink>
              </li>
              <li>
              <NavLink
                className={({ isActive }) =>
                  isActive &&
                  "font-bold bg-gradient-to-r from-red-300 to-red-500 px-4 py-1 rounded-md"
                }
                to={"/Start-learning"}
              >
                Start-learning
              </NavLink>
              </li>
              <li>
              <NavLink
                  className={({ isActive }) =>
                    isActive &&
                    "font-bold bg-gradient-to-r from-red-300 to-red-500 px-4 py-1 rounded-md"
                  }
                  to={"/Tutorials"}
                >
                  Tutorials
                </NavLink>
              </li>
              <li>
              <NavLink
                className={({ isActive }) =>
                  isActive &&
                  "font-bold bg-gradient-to-r from-red-300 to-red-500 px-4 py-1 rounded-md"
                }
                to={"/about-us"}
              >
                about-us
              </NavLink>
              </li>
              {users && (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive &&
                    "font-bold bg-gradient-to-r from-red-300 to-red-500 px-4 py-1 rounded-md"
                  }
                  to={"/my_profile"}
                >
                
                  My-profile
                </NavLink>
              </li>
            )}
            
            </ul>
          </div>
          <Link to={"/"}>
            <div className="flex items-center  bg-white hover:bg-gray-300 p-1 lg:p-4 rounded-lg">
              <a className=" text-xl ">
                <img
                  className="h-10 w-10 rounded-full object-cover "
                  src={teachers}
                  alt=""
                />
              </a>

              <h1 className="lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-rose-600">Lingo Bingo</h1>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex space-x-6 px-1 ">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive &&
                  "font-bold bg-gradient-to-r from-red-300 to-red-500 px-4 py-1 rounded-md"
                }
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive &&
                  "font-bold bg-gradient-to-r from-red-300 to-red-500 px-4 py-1 rounded-md"
                }
                to={"/Start-learning"}
              >
                Start-learning
              </NavLink>
            </li>
            {users && (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive &&
                    "font-bold bg-gradient-to-r from-red-300 to-red-500 px-4 py-1 rounded-md"
                  }
                  to={"/Tutorials"}
                >
                  Tutorials
                </NavLink>
              </li>
            )}
            <li>
             <NavLink
                className={({ isActive }) =>
                  isActive &&
                  "font-bold bg-gradient-to-r from-red-300 to-red-500 px-4 py-1 rounded-md"
                }
                to={"/about-us"}
              >
                about-us
              </NavLink>
            </li>
            {users && (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive &&
                    "font-bold bg-gradient-to-r from-red-300 to-red-500 px-4 py-1 rounded-md"
                  }
                  to={"/my_profile"}
                >
                
                  My-profile
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end flex gap-3">
          {users && users.email ? (
            <img
              className="h-10 w-11 rounded-full object-cover ring-2 ring-violet-400"
              src={users.photoURL}
              alt=""
            />
          ) : (
            // <p>{users.displayName}</p>

            <button className="btn ">
              <FaUserLarge />
            </button>
          )}

          {users ? (
            <Link  to={"/"}>
              <button
                className="btn text-2xl font-bold bg-gradient-to-r from-yellow-200 to-rose-500 text-white"
                onClick={handleSingOuts}
              >
                
                SingOut
              </button>
            </Link>
          ) : (
            <NavLink to={"/login"}>
              <a className="btn text-2xl font-bold bg-gradient-to-r from-yellow-200 to-rose-500 text-white">Login</a>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
