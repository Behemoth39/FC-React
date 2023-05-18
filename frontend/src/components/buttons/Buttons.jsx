import { EditBtnLogic } from "./ButtonLogic";

import "./buttons.css";

const WorkoutButtons = () => {
  return (
    <div className='buttons'>
      <button>Add exercise</button>
      <button>Logs</button>
    </div>
  );
};

// find better way to combine buttons

const EditBtn = () => {
  return (
    <button onClick={EditBtnLogic} className='edit'>
      E
    </button>
  );
};

const AddSetBtn = () => {
  return <button className='add-set'>Add set</button>;
};

const AddFoodBtn = () => {
  return <button className='add-meal'>Add meal</button>;
};

const DeleteBtn = () => {
  return <button className='delete'>X</button>;
};

const FoodLog = () => {
  return <button className='cal'>Logs</button>;
};

export { WorkoutButtons, EditBtn, AddSetBtn, FoodLog, AddFoodBtn, DeleteBtn };
