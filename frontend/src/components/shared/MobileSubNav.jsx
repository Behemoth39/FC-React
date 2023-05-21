import { Link } from "react-router-dom";

const MobileSubNav = () => {
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

export default MobileSubNav;

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
