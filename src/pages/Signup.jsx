import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const Signup = () => {
  const { SignUp } = useContext(AuthContext);

  const SUBMIT = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    SignUp(email, password)
      .then(() => {
        toast.success("User Created Successfully");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };
  return (
    <div>
      <div className="relative py-16">
        <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="rounded-3xl border border-gray-100      dark:border-gray-700 shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
              <div className="p-8 py-12 sm:p-16">
                <h2 className="mb-8 text-2xl font-bold text-gray-800 dark:text-white">
                  Sign Up
                </h2>
                <form onSubmit={SUBMIT} className="space-y-8">
                  <div className="space-y-2">
                    <label
                      for="email"
                      className="text-gray-600 dark:text-gray-300"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autocomplete="username"
                      className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 dark:text-white transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        for="pwd"
                        className="text-gray-600 dark:text-gray-300"
                      >
                        Password
                      </label>
                    </div>
                    <input
                      type="password"
                      name="password"
                      id="pwd"
                      autocomplete="current-password"
                      className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 dark:text-white  text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                    />
                  </div>
                  <div className="flex flex-wrap justify-between items-center ">
                    <button
                      type="submit"
                      className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    >
                      Sign Up
                    </button>
                    <Link
                      to="/login"
                      className="py-1 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-red-500 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    >
                      Already have an Account Please Login
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
