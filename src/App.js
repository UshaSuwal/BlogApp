import "./App.css";
import { Intro } from "./components/Intro";
import Navbar from "./components/Navbar";
import { Post } from "./components/Post";
import { Story } from "./components/Story";
import React from "react";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Story />

      <Post/>
    </div>
  );
}

export default App;
