// For test
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
        <tr key={food.id}>
          <td>{food.name}</td>
          <td>{food.amount}</td>
          <td>{food.calories}</td>
          <td>{food.protein}</td>
          <td>{food.carbs}</td>
          <td>{food.fats}</td>
          <td className='delete'>X</td>
        </tr>
      ))}
    </>
  );
};

export default FoodList;
