import BankCard from "../../atoms/BankCard";
import Button from "../../atoms/Button";
import CheckmarkLabel from "../../atoms/CheckmarkLabel";
import Price from "../../atoms/Price";
import Rating from "../../atoms/Rating";
import classes from "./RowCard.module.scss";
import { ReactComponent as ApplePay } from "../../../assets/images/apple_pay.svg";
import { ReactComponent as GooglePay } from "../../../assets/images/google_pay.svg";
import Ribbon from "../../atoms/Ribbon";
import RowCardProps from "./RowCard.types";

const RowCard = (props: RowCardProps) => {
  const { creditcard } = props;
  return (
    <div className={`flex flex-col lg:w-1/2 w-full ${classes.wrapper}`}>
      <div className="flex flex-row justify-between">
        <Ribbon />
        <BankCard title={creditcard.title} image={creditcard.image} />
        <Rating score={creditcard.rating.score} description={creditcard.rating.description}  />
      </div>
      <div className="flex flex-row my-4 justify-between">
        <div className="flex flex-col gap-4">
          {creditcard.features.map((feature, index) => (
            <CheckmarkLabel
              key={index}
              title={feature.title}
              isHighlighted={feature.highlighted}
            />
          ))}
         
        </div>
        <Price charge={creditcard.charge} className="justify-end text-end" />
      </div>

      <div className="flex flex-row justify-between pt-6 text-end">
        <div className="flex flex-row gap-1">
          <ApplePay />
          <GooglePay />
        </div>
        <Button title="Zum Angebot ›"/>
      </div>
    </div>
  );
};

export default RowCard;
