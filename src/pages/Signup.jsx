import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div class="relative py-16">
        <div class="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div class="m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div class="rounded-3xl border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
              <div class="p-8 py-12 sm:p-16">
                <h2 class="mb-8 text-2xl font-bold text-gray-800 dark:text-white">
                  Sign Up
                </h2>
                <form action="" class="space-y-8">
                  <div class="space-y-2">
                    <label for="email" class="text-gray-600 dark:text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autocomplete="username"
                      class="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                    />
                  </div>

                  <div>
                    <div class="flex items-center justify-between">
                      <label for="pwd" class="text-gray-600 dark:text-gray-300">
                        Password
                      </label>
                    </div>
                    <input
                      type="password"
                      name="password"
                      id="pwd"
                      autocomplete="current-password"
                      class="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                    />
                  </div>
                  <div className="flex flex-wrap justify-between items-center ">
                    <button
                      type="submit"
                      class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    >
                      Sign Up
                    </button>
                    <Link
                      to="/login"
                      class="py-1 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-red-500 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
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
