import { useEffect, useState } from "react";
import axios from "axios";

import FoodList from "./FoodList";
import FoodSum from "./FoodsSum";
import FoodNote from "./FoodNote";
import { FoodLog, AddFoodBtn } from "../buttons/Buttons";
import AddMeal from "../fom/AddMeal";

import "./food.css";

const Food = () => {
  // Add error handler for axios

  const [food, setFood] = useState([]);
  const url = "http://localhost:5000/api/v1/food";

  useEffect(() => {
    const loadFoods = async () => {
      const { data } = await axios.get(url);
      setFood(data);
    };

    loadFoods();
  }, []);

  // pressing Add meal should bring up AddMeal and maybe hide FoodList?
  const onAddMealHandler = async (e) => {
    e.preventDefault();
    let foodList = [];
    const name = e.target.meal.value;
    const newMeal = { name };
    const { data } = await axios.post(url, newMeal);
    foodList = [...food, data];
    setFood(foodList);
  };

  return (
    <main>
      <section className='table-holder'>
        <FoodLog />
        <AddMeal onAddMeal={onAddMealHandler} />
        <div className='table-container'>
          <table className='main-table'>
            <colgroup>
              <col className='col-1' />
              <col className='col-2' />
              <col className='col-2' />
              <col className='col-2' />
              <col className='col-2' />
              <col className='col-2' />
              <col className='col-3' />
            </colgroup>
            <thead>
              <tr>
                <td>Food</td>
                <td>Amount / g</td>
                <td>Calories / kcal</td>
                <td>Protein / g</td>
                <td>Carbs / g</td>
                <td>Fat / g</td>
              </tr>
            </thead>
            <tbody id='foods'>
              <FoodList foods={food} />
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <AddFoodBtn />
                </td>
              </tr>
            </tfoot>
          </table>
          <div className='sum-note'>
            <FoodSum />
            <FoodNote />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Food;
