import PropTypes from "prop-types";

import Card from "./Card";

const Cards = ({cards, handleCard}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8">
      {cards.map((card) => (
        <Card key={card.id} card={card} handleCard={handleCard}/>
      ))}
    </div>
  );
};

Cards.propTypes = {
  cards: PropTypes.array,
  handleCard: PropTypes.func
};

export default Cards;
