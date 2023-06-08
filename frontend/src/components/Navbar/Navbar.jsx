import { useState } from "react";
import MobileNav from "./MobileNav";
import ScreenNav from "./ScreenNav";
import "./navbar.css";

const Navbar = () => {
  const [page] = useState(window.location.pathname);

  //reloads page to many times
  //setPage(window.location.pathname);
  return (
    <header>
      <MobileNav page={page} />
      <ScreenNav page={page} />
    </header>
  );
};

export default Navbar;
