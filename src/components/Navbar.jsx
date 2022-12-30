import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const menu = (
    <>
      {user ? (
        <>
        <Link
            to="/addtask"
            className="font-semibold  hover:text-blue-500 dark:dark:text-white dark:hover:text-blue-500"
          >
            Add Task
          </Link>
          <Link
            to="/mytask"
            className="font-semibold  hover:text-blue-500 dark:dark:text-white dark:hover:text-blue-500"
          >
            My Task
          </Link>
          <Link
            to="/completedtask"
            className="font-semibold  hover:text-blue-500 dark:dark:text-white dark:hover:text-blue-500"
          >
            Completed Task
          </Link>
          <Link
            onClick={logOut}
            className="font-semibold  hover:text-blue-500 dark:dark:text-white dark:hover:text-blue-500"
          >
            Log Out
          </Link>
        </>
      ) : (
        <>
          <Link
            to="/addtask"
            className="font-semibold  hover:text-blue-500 dark:dark:text-white dark:hover:text-blue-500"
          >
            Add Task
          </Link>
          <Link
            to="/login"
            className="font-semibold  hover:text-blue-500 dark:dark:text-white dark:hover:text-blue-500"
          >
            Login
          </Link>
        </>
      )}
    </>
  );
  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full   text-sm py-4  ">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex-none text-xl font-semibold dark:text-white"
            >
              Let's DO
            </Link>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium    text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm   dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-collapse="#navbar-with-collapse"
                aria-controls="navbar-with-collapse"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-with-collapse"
            className="hidden basis-full grow sm:block"
          >
            <div className=" flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
              {menu}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
