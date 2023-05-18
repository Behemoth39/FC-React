import React from "react";
//import Workout from "./components/workout/Workout";
import Food from "./components/food/Food";
//import Home from "./components/home/Home";

//import workouts from "./data/workouts.json";
import foods from "./data/foods.json";

import "./assets/css/base.css";
import "./assets/css/color.css";

const App = () => {
  //return <Workout workouts={workouts} />;
  return <Food foods={foods} />;
  //return <Home />;
};

export default App;
