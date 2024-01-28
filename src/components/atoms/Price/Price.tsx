import PriceProps from "./Price.types";

const Price: React.FC<PriceProps> = ({ className, ...props }: PriceProps) => {
  const { charge='0.0' } = props;
  return (
    <div className={`flex flex-col ${className}`}>
      <p className="font-bold text-4xl pb-3 text-cc-dark-blue">{charge} €</p>
      <p className="text-sm text-cc-dark-blue leading-5">Grundgebühr</p>
    </div>
  );
};

export default Price;
