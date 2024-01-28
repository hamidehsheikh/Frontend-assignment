import Logo from "../../atoms/Logo";
import classes from "../Header/Header.module.scss";
import { useState, useEffect } from "react";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white z-50 ${
        hasScrolled ? "shadow-md" : "shadow-none"
      } transition-all ${classes.wrapper}`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <Logo />
      </nav>
    </header>
  );
};

export default Header;
