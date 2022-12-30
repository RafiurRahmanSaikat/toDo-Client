import React from "react";

const TaskCard = ({ data }) => {
  console.log("CARD DATA", data);
  const { details, taskName, taskImage, taskCompleted } = data;
  return (
    <>
      <div className="w-full  max-w-sm overflow-hidden  outline outline-offset-4 p-2 outline-emerald-500  rounded-lg shadow-lg  ">
        <img
          className="object-cover object-center w-full h-56"
          src={taskImage}
          alt={taskImage}
        />

        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            {taskName}
          </h1>

          <p className="py-2 h-44 text-gray-700 overflow-x-scroll dark:text-gray-400">
            Details : <br />
            {details}
          </p>
        </div>
        <div className="flex items-center justify-between px-6 py-3 bg-gray-900">
          <h1 className="mx-3 text-lg font-semibold text-white">Make Done</h1>
          <h1 className="mx-3 text-lg font-semibold text-white">Pending</h1>
          <h1 className="mx-3 text-lg font-semibold text-white">Delete</h1>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
