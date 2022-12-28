import React from "react";
import CompletedTaskCard from "../components/CompletedTaskCard";

const CompletedTask = () => {
  return (
    <>
      <div className="container gap-8 p-4 flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
        <CompletedTaskCard />
        <CompletedTaskCard />
        <CompletedTaskCard />
        <CompletedTaskCard />
        <CompletedTaskCard />
        <CompletedTaskCard />
        <CompletedTaskCard />
      </div>
    </>
  );
};

export default CompletedTask;
