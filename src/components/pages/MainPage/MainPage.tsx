import Footer from "../../molecules/Footer";
import Header from "../../molecules/Header";
import ColumnCard from "../../organisms/ColumnCard";
import RowCard from "../../organisms/RowCard";
import classes from "./MainPage.module.scss";
import CreditcardAPI from "../../../api/requests/Creditcard";
import { useEffect, useState } from "react";
import ICreditcardData from "../../../api/requests/Creditcard.types";
import JumpToTopButton from "../../atoms/JumpToTopButton";

const MainPage = () => {
  const [creditcards, setCreditcards] = useState([]);

  useEffect(() => {
    CreditcardAPI.getAll()
      .then((response: any) => {
        setCreditcards(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }, []);

  return (
    <div className={`mt-16 ${classes.wrapper}`}>
      <Header />
      <div className="flex flex-col bg-gray-100">
        <h1 className="font-bold my-12 text-cc-dark-blue">
          Kreditkarten-Vergleich: Top Kreditkarten 2024
        </h1>
        <div
          className={`flex lg:flex-row flex-col justify-between gap-5 ${classes.cardWrapper}`}
        >
          {creditcards.slice(0, 2).map((card: ICreditcardData, index) => (
            <RowCard key={card.id + index} creditcard={card} />
          ))}
        </div>
      </div>
      <div className={`flex flex-col gap-7 p-12 ${classes.cardWrapper}`}>
        {creditcards.map((card: ICreditcardData, index) => (
          <ColumnCard key={card.id + index} creditcard={card} />
        ))}

        <span className="text-right font-light">Stand Januar 2024</span>
      </div>

      <div className="flex flex-col text-left p-8 bg-gray-100">
        <span className="font-bold text-2xl pb-4 text-cc-dark-blue">
          Unsere Empfehlung
        </span>

        <div className={classes.cardWrapper}>
          {creditcards && creditcards.length > 0 && (
            <ColumnCard
              creditcard={
                creditcards[Math.floor(Math.random() * creditcards.length)]
              }
            />
          )}
        </div>
        <div className="text-cc-dark-indigo font-light text-base">
          <p className="pb-4 pt-12">
            <span className="font-bold">Hinweis: </span>
            Dieser Vergleich enthält keinen kompletten Marktüberblick.
          </p>
          <p>
            Die Nutzung unseres Vergleichs ist für Dich vollkommen kostenlos.
            Wir finanzieren uns über Provisionen. Wenn Du ein Finanzprodukt über
            uns beantragst, erhalten wir vom Anbieter eine Vergütung. Dies hat
            jedoch keinen Einfluss auf die Kosten Deiner Kreditkarte.
          </p>
        </div>
      </div>
      <Footer />
      <JumpToTopButton />
    </div>
  );
};

export default MainPage;
