import { HTMLProps } from "react";

interface StatisticsProps extends HTMLProps<HTMLDivElement> {
  withdrawalFees?: number;
  withdrawalFeesDescription?: string;
  interest?: number;
}

export default StatisticsProps;
