import WorkoutList from "./WorkoutList";
import "./workout.css";

const Workout = () => {
  return (
    <main>
      <section className='holder' id='workouts'>
        <WorkoutList />
      </section>
    </main>
  );
};

export default Workout;
