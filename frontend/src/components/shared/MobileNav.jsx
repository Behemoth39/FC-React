import { Link, NavLink } from "react-router-dom";
import MobileSubNav from "./MobileSubNav";

const MobileNav = () => {
  return (
    <nav className='navbar-mobile'>
      <div className='mainbar'>
        <ul className='navbar-links'>
          <li className='navbar-site-name'>
            <Link to='/'>Fitness Companion</Link>
          </li>
          <li className='toggle'>
            <input className='menu-btn' type='checkbox' id='menu-btn' />
            <label className='menu-icon' htmlFor='menu-btn'>
              <span>
                <i className='fa-solid fa-bars'></i>
              </span>
            </label>
          </li>
          <li className='li-item'>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='li-item'>
            <NavLink to='/food'>Food</NavLink>
          </li>
          <li className='li-item'>
            <NavLink to='/workout'>Workout</NavLink>
          </li>
          <li className='li-item'>
            <Link to='#'>About</Link>
          </li>
          <li className='li-item'>
            <Link to='#'>Login | Signup</Link>
          </li>
          <MobileSubNav />
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
