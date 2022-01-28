import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../images/logo.png";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../actions/userActions";

const NavBar = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/login");
  };
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img src={logo} alt="" width="100px" />
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/todo" className="mr-5 hover:text-gray-900">
              Take ToDO
            </Link>
            <Link to="/mynotes" className="mr-5 hover:text-gray-900" href="takenotes.html">
              Set Reminder
            </Link> 
          </nav>

          {/* taildwin dropdown */}

          <div className="p-10">
            <div className="dropdown inline-block relative">
              <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                <span className="mr-1">{userInfo.username}</span>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                </svg>
              </button>
              <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                <li className="">
                  <Link
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    to="/accountsetting"
                  >
                    Account Setting
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    to="/feedback"
                  >
                    FeedBack
                  </Link>
                </li>
                <li className="">
                  <a
                    className="bg-gray-200  py-2 px-10 block whitespace-no-wrap"
                    href="#"
                  >
                    <button
                      onClick={logoutHandler}
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                      LogOut
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
