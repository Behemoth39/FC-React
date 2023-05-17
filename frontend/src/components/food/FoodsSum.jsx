const FoodSum = () => {
  return (
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
  );
};

export default FoodSum;
