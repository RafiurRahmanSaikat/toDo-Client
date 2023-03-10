import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import googlePic from "../assets/google.png";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login, GoogleSignIn } = useContext(AuthContext);

  const SUBMIT = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    login(email, password)
      .then((result) => {
        toast.success("User Login Successfully");
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.code);
      });
  };
  const GOOGLESIGNIN = () => {
    GoogleSignIn()
      .then(() => {
        toast.success("User Login Successfully");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.code);
      });
  };

  return (
    <>
      <div className="m-auto  xl:container px-12 sm:px-0 mx-auto">
        <div className="mx-auto h-full sm:w-max">
          <div className="m-auto  py-12">
            <div className="space-y-4"></div>
            <div className="mt-12 rounded-3xl border dark:bg-gray-800 bg-gray-50 dark:border-gray-700   -mx-6 sm:-mx-10 p-8 sm:p-10">
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-white">
                Login to your account
              </h3>
              <div className="mt-12 flex flex-wrap sm:grid gap-6 grid-cols-2">
                <button
                  onClick={GOOGLESIGNIN}
                  className="w-full h-11 rounded-full border border-gray-300/75    px-6 transition active:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700"
                >
                  <div className="w-max mx-auto flex items-center justify-center space-x-4">
                    <img src={googlePic} className="w-5" alt="" />
                    <span className="block w-max text-sm font-semibold tracking-wide text-cyan-700 dark:text-white">
                      With Google
                    </span>
                  </div>
                </button>
                <button className="w-full h-11 rounded-full bg-gray-900 px-6 transition hover:bg-gray-800 focus:bg-gray-700 active:bg-gray-600 dark:bg-gray-700 dark:border dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700">
                  <Link
                    to="/signup"
                    className="w-max mx-auto flex items-center justify-center space-x-4 text-white"
                  >
                    Create New Account
                  </Link>
                </button>
              </div>

              <form
                onSubmit={SUBMIT}
                className="mt-10 space-y-8 dark:text-white"
              >
                <div>
                  <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                    <input
                      id=""
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800"
                  >
                    <span className="text-base font-semibold text-white dark:text-gray-900">
                      Login
                    </span>
                  </button>
                </div>
              </form>
            </div>
            <div className="border-t pt-12 text-gray-500 dark:border-gray-800"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
