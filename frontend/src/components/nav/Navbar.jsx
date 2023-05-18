import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  <header>
    <nav class='navbar-mobile'>
      <div class='mainbar'>
        <ul class='navbar-links'>
          <li class='navbar-site-name'>
            <Link ta='../index.html'>Fitness Companion</Link>
          </li>
          <li class='toggle'>
            <input class='menu-btn' type='checkbox' id='menu-btn' />
            <label class='menu-icon' for='menu-btn'>
              <span>
                <i class='fa-solid fa-bars'></i>
              </span>
            </label>
          </li>
          <li class='li-item'>
            <Link ta='../index.html'>Home</Link>
          </li>
          <li class='li-item'>
            <Link ta='./food.html'>Food</Link>
          </li>
          <li class='li-item'>
            <Link ta='./workout.html'>Workout</Link>
          </li>
          <li class='li-item'>
            <Link ta='#'>About</Link>
          </li>
          <li class='li-item'>
            <Link ta='#'>Login | Signup</Link>
          </li>
          <li class='li-item'>
            <Link ta='./food.html'>Diary</Link>
          </li>
          <li class='li-item'>
            <Link ta='#'>My Plans</Link>
          </li>
          <li class='li-item'>
            <Link ta='#'>Free Plans</Link>
          </li>
          <li class='li-item'>
            <Link ta='#'>Premium Plans</Link>
          </li>
        </ul>
      </div>
    </nav>
    <nav class='navbar-screen'>
      <div class='mainbar'>
        <ul class='navbar-links'>
          <li class='navbar-site-name'>
            <Link ta='../index.html'>Fitness Companion</Link>
          </li>
          <li>
            <Link ta='../index.html'>Home</Link>
          </li>
          <li>
            <Link ta='./food.html'>Food</Link>
          </li>
          <li>
            <Link ta='./workout.html'>Workout</Link>
          </li>
          <li>
            <Link ta='#'>About</Link>
          </li>
          <li>
            <Link ta='#'>Login | Signup</Link>
          </li>
        </ul>
      </div>
      <div class='subbar'>
        <ul class='subbar-links'>
          <li>
            <Link ta='./food.html'>Diary</Link>
          </li>
          <li>
            <Link ta='#'>My Plans</Link>
          </li>
          <li>
            <Link ta='#'>Free Plans</Link>
          </li>
          <li>
            <Link ta='#'>Premium Plans</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>;
};

export default Navbar;
