import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Section1 from "./components/Landing/section1";

const App = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  return (
    <>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Section1 />
      <Footer isDark={isDark} />
    </>
  );
};

export default App;
