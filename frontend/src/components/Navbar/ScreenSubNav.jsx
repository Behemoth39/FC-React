import { Link } from "react-router-dom";

const ScreenSubFoodNav = () => {
  return (
    <div className='subbar'>
      <ul className='subbar-links'>
        <li>
          <Link to='/food'>Diary</Link>
        </li>
        <li>
          <Link to='#'>My Plans</Link>
        </li>
        <li>
          <Link to='#'>Free Plans</Link>
        </li>
        <li>
          <Link to='#'>Premium Plans</Link>
        </li>
      </ul>
    </div>
  );
};
const ScreenSubWorkoutNav = () => {
  return (
    <div className='subbar'>
      <ul className='subbar-links'>
        <li>
          <Link to='/workout'>Diary</Link>
        </li>
        <li>
          <Link to='#'>My Progams</Link>
        </li>
        <li>
          <Link to='#'>Free Programs</Link>
        </li>
        <li>
          <Link to='#'>Premium Programs</Link>
        </li>
      </ul>
    </div>
  );
};

export { ScreenSubFoodNav, ScreenSubWorkoutNav };
