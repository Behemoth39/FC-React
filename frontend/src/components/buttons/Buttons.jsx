import "./buttons.css";

const EditBtnLogic = () => {
  return console.log("edited");
};

// get correct food.id from DeleteBtn
const DeleteBtnLogic = ({ food }) => {
  return console.log({ food });
};
const FoodLogLogic = () => {
  return console.log("food log");
};
const AddSetBtnlogic = () => {
  return console.log("added set");
};
const AddexerciseBtnlogic = () => {
  return console.log("add exercise ");
};
const WorkoutLogLogic = () => {
  return console.log("workout log");
};

// way to many buttons in the same file

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

// filter and send { food } to DeleteBtnLogic
const DeleteBtn = ({ food }) => {
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
