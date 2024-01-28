import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div
      className={`flex flex-row bg-cc-dark-blue py-5 text-gray-300 font-light text-xs ${classes.wrapper}`}
    >
      <ul className="flex flex-row">
        <li>
          <a className="text-gray-400 hover:text-white transition-colors duration-300">
            Datenschutz
          </a>
        </li>
        <li>
          <a className="text-gray-400 hover:text-white transition-colors duration-300">
            Impressum
          </a>
        </li>
        <li>
          <a className="text-gray-400 hover:text-white transition-colors duration-300">
            Cookie-Einstellungen
          </a>
        </li>
      </ul>
      <p>© 2024 Insidemarketing. Alle Rechte vorbehalten.</p>
    </div>
  );
};

export default Footer;
