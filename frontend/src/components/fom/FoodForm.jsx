import { useState } from "react";
import axios from "axios";

import "./forms.css";

const FoodForm = ({ onFoodAdded }) => {
  const [name, setname] = useState("");
  const [amount, setamount] = useState("");
  const [calories, setcalories] = useState("");
  const [protein, setprotein] = useState("");
  const [carbs, setcarbs] = useState("");
  const [fats, setfats] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const meal = { name, amount, calories, protein, carbs, fats };

    const url = "http://localhost:5000/api/v1/food";
    const { data } = await axios.post(url, meal);
    onFoodAdded(data);
  };

  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3>New Meal</h3>

      <label>Food:</label>
      <input type='text' onChange={(e) => setname(e.target.value)} value={name} />

      <label>Amount (in g):</label>
      <input type='number' onChange={(e) => setamount(e.target.value)} value={amount} />

      <label>Calories (in kcal):</label>
      <input type='number' onChange={(e) => setcalories(e.target.value)} value={calories} />

      <label>Protein (in g):</label>
      <input type='number' onChange={(e) => setprotein(e.target.value)} value={protein} />

      <label>Carbs (in g):</label>
      <input type='number' onChange={(e) => setcarbs(e.target.value)} value={carbs} />

      <label>fats (in g):</label>
      <input type='number' onChange={(e) => setfats(e.target.value)} value={fats} />

      <button>Add Meal</button>
    </form>
  );
};

export default FoodForm;
