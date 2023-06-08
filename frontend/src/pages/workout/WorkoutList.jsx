import { EditBtn, AddSetBtn } from "../../components/buttons/Buttons";

const WorkoutList = ({ workouts }) => {
  if (!workouts || workouts.lengt === 0) {
    return (
      <>
        <h1>Det finns inga sparade övnignar</h1>
      </>
    );
  }
  return (
    <>
      {workouts.map((workout) => (
        <div key={workout.id} className='container'>
          <div className='head'>
            <h3>{workout.exercise}</h3>
            <EditBtn />
          </div>
          <div className='content' id='exercise'>
            <p>{workout.sets}</p>
            <p>{workout.reps}</p>
            <p>{workout.weight}</p>
            <EditBtn />
          </div>
          <AddSetBtn />
        </div>
      ))}
    </>
  );
};

export default WorkoutList;
