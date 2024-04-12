import "./App.css";
import { Footer } from "./components/Footer";
import { Intro } from "./components/Intro";
import Navbar from "./components/Navbar";
import { Post } from "./components/Post";
import { Project } from "./components/Project";
import { Story } from "./components/Story";
import React from "react";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Story />
      <Post/>
      <Project />
      <Footer />
    </div>
  );
}

export default App;
