import { Link } from "react-router-dom";
import logo from "../../assets/logo/vecteezy_car-toys-kid-logo_.jpg";

const NavBar = () => {
  const list = (
    <>
      <li className="hover:bg-green-500 rounded-lg">
        <Link to="/" className="font-semibold hover:text-white">
          Home
        </Link>
      </li>
      <li className="hover:bg-amber-500 rounded-lg">
        <Link className="font-semibold hover:text-white">All Toys</Link>
      </li>
      <li className="hover:bg-lime-500 rounded-lg">
        <Link className="font-semibold hover:text-white">My Toys</Link>
      </li>
      <li className="hover:bg-teal-500 rounded-lg">
        <Link className="font-semibold hover:text-white">Add a Toy</Link>
      </li>
      <li className="hover:bg-fuchsia-500 rounded-lg">
        <Link className="font-semibold hover:text-white">Blogs</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {list}
          </ul>
        </div>

        {/* <div className="w-[70px] md:w-[80px]  md:h-[70px] ">
          <img src={logo} />
        </div> */}
        <h2 className="normal-case text-xl md:text-4xl text-lime-600 font-bold font-serif">
          Car Toys
        </h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{list}</ul>
      </div>
      <div className="navbar-end">
        <label className="btn btn-circle avatar">
          <img
            className="w-12 rounded-full"
            src="https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </label>
      </div>
    </div>
  );
};

export default NavBar;
