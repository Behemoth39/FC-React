import WorkoutList from "./WorkoutList";
import WorkoutButton from "./WorkoutButton";
import "./workout.css";

const Workout = () => {
  return (
    <main>
      <section className='holder' id='workouts'>
        <WorkoutButton />
        <WorkoutList />
      </section>
    </main>
  );
};

export default Workout;
