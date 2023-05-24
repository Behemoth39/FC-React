import { useEffect, useState } from "react";
import axios from "axios";

import FoodList from "./FoodList";
import FoodSum from "./FoodsSum";
import FoodNote from "./FoodNote";
import { FoodLog, AddFoodBtn } from "../buttons/Buttons";
import FoodForm from "../fom/FoodForm";

import "./food.css";

const Food = () => {
  // Add error handler

  const [food, setFood] = useState([]);
  const [displayFoodForm, setDisplayFoodForm] = useState(false);
  const url = "http://localhost:5000/api/v1/food";

  const onDisplayForm = () => {
    setDisplayFoodForm(true);
  };
  const onHideForm = () => {
    setDisplayFoodForm(false);
  };

  useEffect(() => {
    const loadFoods = async () => {
      const { data } = await axios.get(url);
      setFood(data);
    };

    loadFoods();
  }, []);

  const onAddMealHandler = (data) => {
    let foodList = [];
    foodList = [...food, data];
    setFood(foodList);
  };

  // pressing Add meal should bring up FoodForm and maybe hide the rest?
  return (
    <main>
      <section className='table-holder'>
        <FoodLog />
        <div className='table-container'>
          <div>
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
                    <AddFoodBtn displayForm={onDisplayForm} />
                  </td>
                </tr>
              </tfoot>
            </table>
            {displayFoodForm === false ? null : (
              <FoodForm onFoodAdded={onAddMealHandler} HideForm={onHideForm} />
            )}
          </div>
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
