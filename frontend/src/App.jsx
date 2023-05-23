import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/shared/Navbar";
import Home from "./components/home/Home";
import Food from "./components/food/Food";
import Workout from "./components/workout/Workout";
import Exercise from "./components/exercise/Exercise";

import "./assets/css/base.css";
import "./assets/css/color.css";

import workouts from "./data/workouts.json";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/food' element={<Food />} />
        <Route path='/workout' element={<Workout workouts={workouts} />} />
        <Route path='/exercise' element={<Exercise />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
