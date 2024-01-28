import { useState } from "react";
import { PopoverProps } from "./Popover.types";
import classes from "./Popover.module.scss";
const Popover: React.FC<PopoverProps> = ({ content, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative align-middle top-1">
      {isOpen && (
        <>
          <div
            className={`absolute z-10 w-64 p-2 bg-white border rounded border-gray-300 shadow -top-18 ${classes.popover}`}
          >
            {content}
            <div className={classes.popoverArrow}></div>
          </div>
        </>
      )}
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
    </div>
  );
};

export default Popover;
