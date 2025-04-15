import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Section1 from "./components/Landing/section1";
import Section2 from "./components/Landing/Section2";
import Section3 from "./components/Landing/Section3";
import Section4 from "./components/Landing/Section4";
import Section5 from "./components/Landing/Section5";
import Section6 from "./components/Landing/Section6";

const App = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  return (
    <>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer isDark={isDark} />
    </>
  );
};

export default App;
