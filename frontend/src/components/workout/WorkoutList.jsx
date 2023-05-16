import WorkoutButton from "./WorkoutButton";
import "./workout.css";

const WorkoutList = () => {
  const workouts = [
    {
      id: 1,
      exercise: "Squats",
      sets: 5,
      reps: [8, 8, 8, 6, 4],
      weight: [120, 120, 120, 120, 120],
    },
    {
      id: 2,
      exercise: "Bench",
      sets: 3,
      reps: [6, 6, 6],
      weight: [100, 100, 100],
    },
    {
      id: 3,
      exercise: "Barbell row",
      sets: 4,
      reps: [15, 14, 13, 12],
      weight: [75, 75, 75, 75],
    },
    {
      id: 4,
      exercise: "Hamstring curl",
      sets: 3,
      reps: [12, 12, 12],
      weight: [50, 50, 50],
    },
    {
      id: 5,
      exercise: "Hammer curl",
      sets: 4,
      reps: [10, 10, 10, 10],
      weight: [18, 18, 18, 18],
    },
  ];

  return (
    <>
      {workouts.map((workout) => (
        <div key={workout.id} className='container'>
          <WorkoutButton />
          <div className='head'>
            <h3>{workout.exercise}</h3>
            <p className='edit'>E</p>
          </div>
          <div className='content' id='exercise'>
            <p>{workout.sets}</p>
            <p>{workout.reps}</p>
            <p>{workout.weight}</p>
            <p className='edit'>E</p>
          </div>
          <div className='add-set'>Add set</div>
        </div>
      ))}
    </>
  );
};

export default WorkoutList;
