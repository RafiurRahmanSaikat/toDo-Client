import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import TaskCard from "../components/TaskCard";
import Loading from "../components/Utilities/Loading";
import { AuthContext } from "../context/AuthContext";

const MyTask = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const { data, refetch, isLoading } = useQuery({
    queryKey: [email],
    queryFn: async () => {
      const res = await fetch(
        `https://to-do-server-six.vercel.app/mytask?search=${email}`
      );

      const data = await res.json();
      // console.log("FETCH DATA" ,data );
      return data;
    },
  });
  // console.log(isLoading,"LAST");
  return (
    <>
      <section className="p-4 text-gray-800">
        <h1 className="bg-gradient-to-r text-center p-8 from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-7xl">
          My Task
        </h1>

        <div className="container gap-8 flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
          {isLoading ? (
            <Loading></Loading>
          ) : (
            data?.map((data) => <TaskCard data={data} key={data._id}></TaskCard>)
          )}

          
        </div>
      </section>
    </>
  );
};

export default MyTask;
