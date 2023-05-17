import FoodList from "./FoodList";
import FoodSum from "./FoodsSum";
import FoodNote from "./FoodNote";
import { FoodLog } from "../buttons/Buttons";
import "./food.css";

const Food = ({ foods }) => {
  return (
    <main>
      <section className='table-holder'>
        <FoodLog />
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
              <FoodList foods={foods} />
            </tbody>
            <tfoot>
              <tr>
                <td colSpan='3'>Add Meal</td>
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
