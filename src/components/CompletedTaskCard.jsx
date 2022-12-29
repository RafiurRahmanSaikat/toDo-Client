import React from "react";

const CompletedTaskCard = () => {
  return (
    <>
      <div className="w-full p-4 max-w-sm overflow-hidden    rounded-lg shadow-lg  ">
        <img
          className="object-cover rounded-xl object-center w-full h-56"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          alt="avatar"
        />

        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            Task Title
          </h1>

          <p className="py-2 text-gray-700 dark:text-gray-400">
            Details : <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque,
            nulla animi ut tempore consequatur quisquam nihil cumque nemo, des
          </p>
        </div>
        <form
          action="
        
        "
        >
          <div className="flex flex-col">
            <textarea
              name="details"
              rows="2"
              placeholder="Add Your Comments"
              className="py-3 px-4 m-2 block w-full text-base border-gray-200 rounded-md  focus:border-blue-500 focus:ring-blue-500   dark:border-gray-700 dark:text-white"
            ></textarea>
            <button
              type="submit"
              className="mx-auto m-2 px-8 py-3 font-semibold bg-green-600 rounded-full text-base dark:text-gray-100"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CompletedTaskCard;
