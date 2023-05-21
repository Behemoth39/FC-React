import { Link } from "react-router-dom";

const ScreenSubNav = () => {
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

export default ScreenSubNav;

/*

  <div class="subbar">
          <ul class="subbar-links">
            <li><a href="./workout.html">Diary</a></li>
            <li><a href="">My Progams</a></li>
            <li><a href="">Free Programs</a></li>
            <li><a href="">Premium Programs</a></li>
          </ul>
        </div>

*/
