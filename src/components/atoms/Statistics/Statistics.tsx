import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import StatisticsProps from "./Statistics.types";
import Popover from "../Popover";

const Statistics: React.FC<StatisticsProps> = ({
  className,
  ...props
}: StatisticsProps) => {
  const {
    withdrawalFees = 0,
    withdrawalFeesDescription = "",
    interest = 0,
  } = props;
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <div className="gap-2">
        <div className="font-bold text-base">{withdrawalFees} %</div>
        <div className="flex flex-row gap-1 items-center">
          <div className="text-sm">Abhebegebühren</div>
          <Popover content={<div>{withdrawalFeesDescription}</div>}>
            <ExclamationCircleIcon className="h-4 w-4 text-cc-dark-blue" />
          </Popover>
        </div>
      </div>
      <div className="gap-2">
        <div className="font-bold">{interest} %</div>
        <div className="text-sm">Zins</div>
      </div>
    </div>
  );
};

export default Statistics;
