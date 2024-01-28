import classes from "./BankCard.module.css";
import BankCardProps from "./BankCard.types";


const BankCard: React.FC<BankCardProps> = (props: BankCardProps) => {
  const { title='', image='' } = props;
  const imagesMapping : Record<string, string> = {
    card1: require("../../../assets/images/cards/card1.png"),
    card2: require("../../../assets/images/cards/card2.png"),
    card3: require("../../../assets/images/cards/card3.png"),
    card4: require("../../../assets/images/cards/card4.png"),
    card5: require("../../../assets/images/cards/card5.png"),
  };
  const imagePath = imagesMapping[image] || '';

  return (
    <div
      className={`flex flex-col items-center ${classes.wrapper}`}
    >
      <img src={imagePath} alt="" />
      <p className="text-xs font-bold text-cc-dark-blue pt-2">
        {title}
      </p>
    </div>
  );
};

export default BankCard;
