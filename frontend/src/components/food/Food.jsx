import FoodList from "./FoodList";
import "./food.css";

const Food = () => {
  return (
    <main>
      <section className='table-holder'>
        <button className='cal'>Logs</button>
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
              <FoodList />
            </tbody>
            <tfoot>
              <tr>
                <td colSpan='3'>Add Meal</td>
              </tr>
            </tfoot>
          </table>
          <div className='sum-note'>
            <table className='sub-table'>
              <colgroup>
                <col className='col-4' />
                <col className='col-4' />
                <col className='col-4' />
                <col className='col-4' />
              </colgroup>
              <thead>
                <tr>
                  <td className='header' colSpan='4'>
                    Daily totals
                  </td>
                </tr>
                <tr>
                  <td>Calories</td>
                  <td>Protein</td>
                  <td>Carbs</td>
                  <td>Fats</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1831</td>
                  <td>110,15</td>
                  <td>156,96</td>
                  <td>90,77</td>
                </tr>
              </tbody>
            </table>
            <div className='text-window'>
              <p>Food notes</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Food;
