import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import "./App.css";
import("preline");

function App() {
  return (
    <section className="">
      <RouterProvider router={router}></RouterProvider>
    </section>
  );
}

export default App;
