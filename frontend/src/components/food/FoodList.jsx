import { Fragment } from "react";
import FoodItem from "./FoodItem";

const FoodList = ({ foods }) => {
  if (!foods || foods.lengt === 0) {
    return (
      <>
        <h1>Det finns inga maträtter sparade</h1>
      </>
    );
  }
  return (
    <>
      {foods.map((food) => (
        <Fragment key={food.id}>
          <FoodItem food={food} />
        </Fragment>
      ))}
    </>
  );
};

export default FoodList;
