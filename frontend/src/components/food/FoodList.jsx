const FoodList = () => {
  const foods = [
    {
      id: 1,
      name: "Chili Con Carne",
      amount: 200,
      calories: 206,
      protein: 15,
      carbs: 7.8,
      fats: 22.4,
    },
    {
      id: 2,
      name: "Carbonara",
      amount: 300,
      calories: 573,
      protein: 24.15,
      carbs: 77.16,
      fats: 15.93,
    },
    {
      id: 3,
      name: "Greek Yoghurt",
      amount: 250,
      calories: 300,
      protein: 10.5,
      carbs: 9,
      fats: 25,
    },
    {
      id: 4,
      name: "Toast",
      amount: 120,
      calories: 312,
      protein: 10.2,
      carbs: 56.4,
      fats: 4.2,
    },
    {
      id: 5,
      name: "Skagenröra",
      amount: 50,
      calories: 210,
      protein: 2.3,
      carbs: 1.6,
      fats: 21.5,
    },
    {
      id: 6,
      name: "Whey shake",
      amount: 64,
      calories: 230,
      protein: 48,
      carbs: 5,
      fats: 1.74,
    },
  ];

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
