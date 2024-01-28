import { ReactComponent as Gauge } from "../../../assets/images/rates/1_1.svg";
import RatingProps from "./Rating.types";

const Rating: React.FC<RatingProps> = (props: RatingProps) => {
  const { score ='1', description='' } = props;
  return (
    <div className={`text-center`}>
      <Gauge />
      <div className="font-bold text-3xl text-cc-dark-blue -mt-16">{score}</div>
      <div className="text-sm text-cc-dark-blue">{description}</div>
    </div>
  );
};

export default Rating;
