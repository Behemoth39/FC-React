import {
  EditBtnLogic,
  DeleteBtnLogic,
  FoodLogLogic,
  AddSetBtnlogic,
  AddexerciseBtnlogic,
  WorkoutLogLogic,
} from "./ButtonLogic";

import "./buttons.css";

//way to many buttons in the same file

const WorkoutButtons = () => {
  return (
    <div className='buttons'>
      <button onClick={AddexerciseBtnlogic}>Add exercise</button>
      <button onClick={WorkoutLogLogic}>Logs</button>
    </div>
  );
};

const EditBtn = () => {
  return (
    <button onClick={EditBtnLogic} className='edit'>
      E
    </button>
  );
};

const AddSetBtn = () => {
  return (
    <button onClick={AddSetBtnlogic} className='add-set'>
      Add set
    </button>
  );
};

const AddFoodBtn = ({ displayForm }) => {
  return (
    <button onClick={displayForm} className='add-meal'>
      Add meal
    </button>
  );
};

const DeleteBtn = () => {
  return (
    <button onClick={DeleteBtnLogic} className='delete'>
      X
    </button>
  );
};

const FoodLog = () => {
  return (
    <button onClick={FoodLogLogic} className='log'>
      Logs
    </button>
  );
};

export { WorkoutButtons, EditBtn, AddSetBtn, FoodLog, AddFoodBtn, DeleteBtn };
