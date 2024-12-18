import React from "react";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Hero from "./pages/student/Hero";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { RouterProvider } from "react-router";
import Courses from "./pages/student/Courses";
import MyLearning from "./pages/student/MyLearning";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Hero />
            <Courses />
          </>
        ),
      },
      { path: "login", element: <Login /> },
      { path: "my-learning", element: <MyLearning /> },
    ],
  },
]);

const App = () => {
  return (
    <main>
      <RouterProvider router={appRouter} />
    </main>
  );
};

export default App;
