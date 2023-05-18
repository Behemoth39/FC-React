import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Food from "./components/food/Food";
import Workout from "./components/workout/Workout";
import Exercise from "./components/exercise/Exercise";

import "./assets/css/base.css";
import "./assets/css/color.css";

import foods from "./data/foods.json";
import workouts from "./data/workouts.json";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/food' element={<Food foods={foods} />} />
        <Route path='/workout' element={<Workout workouts={workouts} />} />
        <Route path='/exercise' element={<Exercise />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
