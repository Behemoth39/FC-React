import "./addMeal.css";

const AddMeal = ({ onAddMeal }) => {
  return (
    <form onSubmit={onAddMeal} className='meal-form'>
      <button>Add</button>
      <input id='name' type='text' name='name' />
      <input type='number' name='amount' />
      <input type='number' name='calories' />
      <input type='number' name='protein' />
      <input type='number' name='carbs' />
      <input type='number' name='fats' />
    </form>
  );
};

export default AddMeal;
