import { Link, NavLink } from "react-router-dom";
import { ScreenSubFoodNav, ScreenSubWorkoutNav } from "./ScreenSubNav";

const ScreenNav = ({ page }) => {
  return (
    <nav className='navbar-screen'>
      <div className='mainbar'>
        <ul className='navbar-links'>
          <li className='navbar-site-name'>
            <Link to='/'>Fitness Companion</Link>
          </li>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/food'>Food</NavLink>
          </li>
          <li>
            <NavLink to='/workout'>Workout</NavLink>
          </li>
          <li>
            <Link to='#'>About</Link>
          </li>
          <li>
            <Link to='#'>Login | Signup</Link>
          </li>
        </ul>
      </div>
      {page === "/food" && <ScreenSubFoodNav />}
      {page === "/workout" && <ScreenSubWorkoutNav />}
    </nav>
  );
};

export default ScreenNav;
