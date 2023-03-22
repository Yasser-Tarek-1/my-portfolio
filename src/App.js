import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Projects from "./components/Projects";

const App = () => {
  return (
    <React.Fragment>
      <Main />
      <About />
      <Projects />
      <Footer />
    </React.Fragment>
  );
};

export default App;
