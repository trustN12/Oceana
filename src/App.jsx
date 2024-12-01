import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Story from "./components/Story";
import Contact from "./components/Donate";
import Footer from "./components/Footer";
import Layers from "./components/Layers";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Layers />
      <Story />
      <Contact />
      <Footer />
      
    </main>
  );
};

export default App;
