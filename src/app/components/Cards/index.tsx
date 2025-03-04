import { Card } from "./Card";

const CARDS = [
  { title: "Località Bella", location: "Roma", stars: 4 },
  { title: "Località Stupenda", location: "Milano", stars: 5 },
];

export const Cards = () => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-4">
      {CARDS.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          location={card.location}
          stars={card.stars}
        />
      ))}
    </div>
  );
};
