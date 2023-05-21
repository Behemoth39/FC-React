import MobileNav from "./MobileNav";
import ScreenNav from "./ScreenNav";
import "./navbar.css";

const Navbar = () => {
  return (
    <header>
      <MobileNav />
      <ScreenNav />
    </header>
  );
};

export default Navbar;
