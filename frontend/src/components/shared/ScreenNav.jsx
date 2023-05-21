import { Link, NavLink } from "react-router-dom";
import ScreenSubNav from "./ScreenSubNav";

const ScreenNav = () => {
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
      <ScreenSubNav />
    </nav>
  );
};

export default ScreenNav;
