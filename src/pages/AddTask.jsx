import React, { useContext } from "react";
import todo from "../assets/todo.png";
import { AuthContext } from "../context/AuthContext";

const AddTask = () => {
  const { user } = useContext(AuthContext);

  const SUBMIT = (event) => {
    event.preventDefault();
    const form = event.target;
    const taskName = form.taskName.value;
    const taskImage = form.taskImage.value;
    const details = form.details.value;
    const userEmail = user?.email;
    const taskCompleted = false;
    console.log({ taskImage, taskName, details, userEmail, taskCompleted });
  };
  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <figure>
            <img className="rounded-xl mx-auto h-[78vh]" src={todo} alt="" />
          </figure>
          <div className="relative">
            <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Add Your Task
              </h2>

              <form onSubmit={SUBMIT}>
                <div className="mt-6 grid gap-4 lg:gap-6">
                  <div>
                    <label className="block text-sm text-gray-700 font-medium dark:text-white">
                      Task Title
                    </label>
                    <input
                      type="text"
                      name="taskName"
                      className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   dark:border-gray-700 dark:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 font-medium dark:text-white">
                      Image
                    </label>
                    <input
                      type="text"
                      name="taskImage"
                      className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   dark:border-gray-700 dark:text-gray-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"></div>

                  <div>
                    <label className="block text-sm text-gray-700 font-medium dark:text-white">
                      Details
                    </label>
                    <textarea
                      name="details"
                      rows="4"
                      className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   dark:border-gray-700 dark:text-gray-400"
                    ></textarea>
                  </div>
                </div>

                <div className="mt-3 flex"></div>

                <div className="mt-6 grid">
                  <button
                    type="submit"
                    className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
