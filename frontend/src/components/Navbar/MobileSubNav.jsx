import { Link } from "react-router-dom";

const MobileSubFoodNav = () => {
  return (
    <>
      <li className='li-item'>
        <Link to='/food'>Diary</Link>
      </li>
      <li className='li-item'>
        <Link to='#'>My Plans</Link>
      </li>
      <li className='li-item'>
        <Link to='#'>Free Plans</Link>
      </li>
      <li className='li-item'>
        <Link to='#'>Premium Plans</Link>
      </li>
    </>
  );
};

const MobileSubWorkoutNav = () => {
  return (
    <>
      <li className='li-item'>
        <Link to='/workout'>Diary</Link>
      </li>
      <li className='li-item'>
        <Link to='#'>My Programs</Link>
      </li>
      <li className='li-item'>
        <Link to='#'>Free Programs</Link>
      </li>
      <li className='li-item'>
        <Link to='#'>Premium Programs</Link>
      </li>
    </>
  );
};

export { MobileSubFoodNav, MobileSubWorkoutNav };
