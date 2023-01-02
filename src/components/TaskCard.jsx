import React, { useState } from "react";

const TaskCard = ({ data }) => {
  const [edit, setEdit] = useState(false);
  const { details, taskName, taskImage, taskCompleted } = data;
  return (
    <>
      <div className="w-full  max-w-sm overflow-hidden  outline outline-offset-4 p-2 outline-emerald-500  rounded-lg shadow-lg  ">
        <img
          className="object-cover rounded-xl  object-center w-full h-56"
          src={taskImage}
          alt={taskImage}
        />

        <div className="px-6 py-4">
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
              {taskName}
            </h1>
            <button
              onClick={() => setEdit(!edit)}
              className="text-red-500 font-bold hover:text-blue-500 text-sm"
            >
              Edit
            </button>
          </div>

          {edit ? (
            <div className="flex flex-col">
              <textarea
                name="details"
                defaultValue={details}
                rows="6"
                placeholder="Edit"
                className="py-3 px-4 m-2 block w-full  dark:text-black border-gray-200 rounded-md  focus:border-blue-500 focus:ring-blue-500   dark:border-gray-700 text-white"
              ></textarea>
              <button
                type="submit"
                className="mx-auto m-2 px-8 py-3 font-semibold bg-green-600 rounded-full text-base dark:text-gray-100"
              >
                Update
              </button>
            </div>
          ) : (
            <p className="py-2 h-44 text-gray-800 overflow-x-scroll dark:text-gray-100">
              Details : <br />
              {details}
            </p>
          )}
        </div>
        <div className="flex rounded-lg  items-center justify-between px-6 py-3 bg-gray-900">
          <h1 className="mx-3 text-lg font-semibold text-white">Make Done</h1>
          <h1 className="mx-3 text-lg font-semibold text-white">Pending</h1>
          <h1 className="mx-3 text-lg font-semibold text-white">Delete</h1>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
