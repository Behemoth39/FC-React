import "./navbar.css";

const Navbar = () => {
  <header>
    <nav class='navbar-mobile'>
      <div class='mainbar'>
        <ul class='navbar-links'>
          <li class='navbar-site-name'>
            <a href='../index.html'>Fitness Companion</a>
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
            <a href='../index.html'>Home</a>
          </li>
          <li class='li-item'>
            <a href='./food.html'>Food</a>
          </li>
          <li class='li-item'>
            <a href='./workout.html'>Workout</a>
          </li>
          <li class='li-item'>
            <a href=''>About</a>
          </li>
          <li class='li-item'>
            <a href=''>Login | Signup</a>
          </li>
          <li class='li-item'>
            <a href='./food.html'>Diary</a>
          </li>
          <li class='li-item'>
            <a href=''>My Plans</a>
          </li>
          <li class='li-item'>
            <a href=''>Free Plans</a>
          </li>
          <li class='li-item'>
            <a href=''>Premium Plans</a>
          </li>
        </ul>
      </div>
    </nav>
    <nav class='navbar-screen'>
      <div class='mainbar'>
        <ul class='navbar-links'>
          <li class='navbar-site-name'>
            <a href='../index.html'>Fitness Companion</a>
          </li>
          <li>
            <a href='../index.html'>Home</a>
          </li>
          <li>
            <a href='./food.html'>Food</a>
          </li>
          <li>
            <a href='./workout.html'>Workout</a>
          </li>
          <li>
            <a href=''>About</a>
          </li>
          <li>
            <a href=''>Login | Signup</a>
          </li>
        </ul>
      </div>
      <div class='subbar'>
        <ul class='subbar-links'>
          <li>
            <a href='./food.html'>Diary</a>
          </li>
          <li>
            <a href=''>My Plans</a>
          </li>
          <li>
            <a href=''>Free Plans</a>
          </li>
          <li>
            <a href=''>Premium Plans</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>;
};

export default Navbar;
