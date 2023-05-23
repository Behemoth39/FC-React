import { DeleteBtn } from "../buttons/Buttons";

const FoodItem = ({food}) => {
  return (
    <tr key={food.id}>
      <td>{food.name}</td>
      <td>{food.amount}</td>
      <td>{food.calories}</td>
      <td>{food.protein}</td>
      <td>{food.carbs}</td>
      <td>{food.fats}</td>
      <td>
        <DeleteBtn />
      </td>
    </tr>
  );
};

export default FoodItem;
