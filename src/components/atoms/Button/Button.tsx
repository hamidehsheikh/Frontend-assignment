import classes from "./Button.module.scss";
import ButtonProps from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  className,
  title = "",
  ...props
}: ButtonProps) => {
  return (
    <div className={className + " " + classes.wrapper} {...props}>
      <button className="flex flex-row items-center text-lg bg-cc-mid-blue text-white px-7 py-2 rounded-lg hover:bg-cc-dark-blue-hover">
        <span>{title}</span>
      </button>
    </div>
  );
};

export default Button;
