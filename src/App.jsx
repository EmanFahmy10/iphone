import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

import * as Sentry from "@sentry/react";

import { ColorModeContext, useMode } from "./theme";

const App = () => {
  const { theme, toggleColorMode } = useMode(); // Using object destructuring here
  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <div
        className={`${theme.backgroundColor} ${theme.textColor} min-h-screen`}
      >
        <div className="App">
          <Navbar />
          <Hero />
          <Highlights />
          <Model />
          <Features />
          <HowItWorks />
          <Footer />
        </div>
      </div>
    </ColorModeContext.Provider>
  );
};

export default Sentry.withProfiler(App);
