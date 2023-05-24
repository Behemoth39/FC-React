import "./forms.css";

// Finish error handling

import { useState } from "react";

const FoodForm = () => {
  const [name, setname] = useState("");
  const [amount, setamount] = useState("");
  const [calories, setcalories] = useState("");
  const [protein, setprotein] = useState("");
  const [carbs, setcarbs] = useState("");
  const [fats, setfats] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const meal = { name, amount, calories, protein, carbs, fats };

    const response = await fetch("http://localhost:5000/api/v1/food", {
      method: "POST",
      body: JSON.stringify(meal),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setname("");
      setamount("");
      setcalories("");
      setprotein("");
      setcarbs("");
      setfats("");
      setError(null);
      setEmptyFields([]);
    }
  };

  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3>New Meal</h3>

      <label>Food:</label>
      <input
        type='text'
        onChange={(e) => setname(e.target.value)}
        value={name}
        className={emptyFields.includes("name") ? "error" : ""}
      />

      <label>Amount (in g):</label>
      <input
        type='number'
        onChange={(e) => setamount(e.target.value)}
        value={amount}
        className={emptyFields.includes("amount") ? "error" : ""}
      />

      <label>Calories (in kcal):</label>
      <input
        type='number'
        onChange={(e) => setcalories(e.target.value)}
        value={calories}
        className={emptyFields.includes("calories") ? "error" : ""}
      />

      <label>Protein (in g):</label>
      <input
        type='number'
        onChange={(e) => setprotein(e.target.value)}
        value={protein}
        className={emptyFields.includes("protein") ? "error" : ""}
      />

      <label>Carbs (in g):</label>
      <input
        type='number'
        onChange={(e) => setcarbs(e.target.value)}
        value={carbs}
        className={emptyFields.includes("carbs") ? "error" : ""}
      />

      <label>fats (in g):</label>
      <input
        type='number'
        onChange={(e) => setfats(e.target.value)}
        value={fats}
        className={emptyFields.includes("fats") ? "error" : ""}
      />

      <button>Add Meal</button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
};

export default FoodForm;
