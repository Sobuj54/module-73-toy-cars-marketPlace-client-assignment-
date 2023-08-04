import { Link } from "react-router-dom";
import logo from "../../assets/logo/vecteezy_car-toys-kid-logo_.jpg";

const NavBar = () => {
  const list = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link>All Toys</Link>
      </li>
      <li>
        <Link>My Toys</Link>
      </li>
      <li>
        <Link>Add a toy</Link>
      </li>
      <li>
        <Link>Blogs</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 ">
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

        <div className="w-[70px] md:w-[120px] md:h-[120px]">
          <img src={logo} />
        </div>
        <h2 className="normal-case md:text-4xl text-sky-500 font-bold">
          Car Toys
        </h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{list}</ul>
      </div>
      <div className="navbar-end">
        <img
          className="w-2/12 rounded-full"
          src="https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
    </div>
  );
};

export default NavBar;
