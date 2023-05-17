import WorkoutList from "./WorkoutList";
import WorkoutButton from "./WorkoutButton";
import "./workout.css";

const Workout = ({ workouts }) => {
  return (
    <main>
      <section className='holder' id='workouts'>
        <WorkoutButton />
        <WorkoutList workouts={workouts} />
      </section>
    </main>
  );
};

export default Workout;
