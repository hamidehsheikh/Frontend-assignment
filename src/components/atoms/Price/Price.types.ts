import { HTMLProps } from "react";

interface PriceProps extends HTMLProps<HTMLDivElement> {
  charge?: number
}

export default PriceProps;
