import MobileNav from "./MobileNav";
import ScreenNav from "./ScreenNav";
import "./navbar.css";

// send info down to submenus
//choose submenus depending on page

const Navbar = () => {
  return (
    <header>
      <MobileNav />
      <ScreenNav />
    </header>
  );
};

export default Navbar;
