import classes from "./Ribbon.module.scss";
import RibbonProps from "./Ribbon.types";

const Ribbon: React.FC<RibbonProps> = ({
  className,
  ...props
}: RibbonProps) => {
  return (
    <div className={className + " " + classes.ribbon}>
      <div className="flex flex-col text-left">
        <p>Top Empfehlung:</p>
        <p>Gebührenfrei Mastercard Gold</p>
      </div>
    </div>
  );
};

export default Ribbon;
