import logoImage from "../../../assets/images/logo.png";
import classes from "../Logo/Logo.module.scss";
const Logo = () => {
  return (
    <a href="#" className="-m-1.5 p-1.5">
      <img className={classes.logo} src={logoImage} alt="" />
    </a>
  );
};

export default Logo;
