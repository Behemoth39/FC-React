import WorkoutList from "./WorkoutList";
import { WorkoutButtons } from "../buttons/Buttons";

import "./workout.css";

const Workout = ({ workouts }) => {
  return (
    <main>
      <section className='holder' id='workouts'>
        <WorkoutList workouts={workouts} />
        <WorkoutButtons />
      </section>
    </main>
  );
};

export default Workout;
