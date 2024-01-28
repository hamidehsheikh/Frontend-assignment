import classes from "./ColumnCard.module.scss";
import BankCard from "../../atoms/BankCard";
import Price from "../../atoms/Price";
import CheckmarkLabel from "../../atoms/CheckmarkLabel";
import Rating from "../../atoms/Rating";
import Button from "../../atoms/Button";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Statistics from "../../atoms/Statistics";
import ColumnCardProps from "./ColumnCard.types";
import InformationTabs from "../../molecules/InformationTabs";

const ColumnCard = (props: ColumnCardProps) => {
  const { creditcard } = props;
  const [isMoreInfoOpen, setIsMoreInfoOpen] = useState(false);
  const toggleMoreInfoBox = () => {
    setIsMoreInfoOpen(!isMoreInfoOpen);
  };

  return (
    <div className={`flex flex-col ${classes.wrapper}`}>
      <div className="flex lg:flex-row flex-col justify-between py-5 px-4 items-center">
        <BankCard title={creditcard.title} image={creditcard.image} />
        <Price charge={creditcard.charge} />
        <Statistics
          withdrawalFees={creditcard.withdrawal_fees}
          withdrawalFeesDescription={creditcard.withdrawal_fees_description}
          interest={creditcard.interest}
          className="max-lg:hidden"
        />
        <div className="flex flex-col gap-2">
          {creditcard.features.map((feature, index) => (
            <CheckmarkLabel
              key={index}
              title={feature.title}
              isHighlighted={feature.highlighted}
            />
          ))}
        </div>
        <Rating
          score={creditcard.rating.score}
          description={creditcard.rating.description}
        />
        <Button title="Zum Angebot ›" />
      </div>
      <div className="content">
        <div
          onClick={toggleMoreInfoBox}
          className="flex flex-row text-sm border-t border-cc-light-gray py-2 justify-center items-center gap-1 hover:cursor-pointer"
        >
          <div>{isMoreInfoOpen ? "Weniger Info" : "Mehr Info"}</div>
          {isMoreInfoOpen ? (
            <ChevronUpIcon className="h-4 w-4 text-cc-dark-blue" />
          ) : (
            <ChevronDownIcon className="h-4 w-4 text-cc-dark-blue" />
          )}
        </div>
        <div
          className={
            isMoreInfoOpen
              ? `${classes.box} ${classes.open}`
              : `${classes.box} ${classes.closed}`
          }
        >
          <InformationTabs information={creditcard.information} />
        </div>
      </div>
    </div>
  );
};

export default ColumnCard;
