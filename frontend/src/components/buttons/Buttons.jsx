import "./buttons.css";

const WorkoutButtons = () => {
  return (
    <div className='buttons'>
      <button>Add exercise</button>
      <button>Logs</button>
    </div>
  );
};

const FoodLog = () => {
  return <button className='cal'>Logs</button>;
};

export { WorkoutButtons, FoodLog };
