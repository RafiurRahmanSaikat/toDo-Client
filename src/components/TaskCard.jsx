import React from "react";

const TaskCard = () => {
  return (
    <>
      <div class="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img
          class="object-cover object-center w-full h-56"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          alt="avatar"
        />

        <div class="px-6 py-4">
          <h1 class="text-xl font-semibold text-gray-800 dark:text-white">
            Task Title
          </h1>

          <p class="py-2 text-gray-700 dark:text-gray-400">
            Details : <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque,
            nulla animi ut tempore consequatur quisquam nihil cumque nemo,
            deserunt necessitatibus nobis, vel officia numquam rem a quo dicta
            corrupti molestiae?
          </p>
        </div>
        <div class="flex items-center justify-between px-6 py-3 bg-gray-900">
          <h1 class="mx-3 text-lg font-semibold text-white">Make Done</h1>
          <h1 class="mx-3 text-lg font-semibold text-white">Pending</h1>
          <h1 class="mx-3 text-lg font-semibold text-white">Delete</h1>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
