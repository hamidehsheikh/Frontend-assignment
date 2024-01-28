import classes from "./CheckmarkLabel.module.scss";
import { CheckIcon } from "@heroicons/react/24/solid";
import { CheckmarkLabelProps } from "./CheckmarkLabel.types";

const CheckmarkLabel: React.FC<CheckmarkLabelProps> = (props: CheckmarkLabelProps) => {
  const { title, isHighlighted } = props;

  return (
    <div
      className={`flex flex-row px-1 text-sm text-cc-dark-blue gap-1 text-left items-center ${classes.wrapper}`}
    >
      <CheckIcon className="h-4 w-4 text-cc-dark-blue" />
      <p
        className={
          isHighlighted
            ? "text-cc-dark-green bg-cc-light-green rounded-xl p-1"
            : ""
        }
      >
        {title}
      </p>
    </div>
  );
};

export default CheckmarkLabel;
