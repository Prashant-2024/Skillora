import React from "react";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Hero from "./pages/student/Hero";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Login />
    </main>
  );
};

export default App;
