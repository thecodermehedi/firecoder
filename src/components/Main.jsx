// import PropTypes from 'prop-types';

import {useState, useEffect} from "react";
import Cards from "./Cards";
import Cart from "./Cart";
import {PropTypes} from "prop-types";

const Main = ({toast}) => {
  const [cards, setCards] = useState([]);
  const [courseNames, setCourseNames] = useState([]);
  const [totalCreditHour, setTotalCreditHour] = useState(0);
  const [remainingCreditHour, setRemainingCreditHour] = useState(20);
  useEffect(() => {
    fetch("../../public/courses.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  const handleCard = (card) => {
    const newTotalCreditHour = totalCreditHour + card.credit;
    const newRemainingCreditHour = remainingCreditHour - card.credit;
    if (courseNames.includes(card)) {
      toast.warn("Item already added!");
      return;
    } else if (newTotalCreditHour > 20 || newRemainingCreditHour < 0) {
      toast.error("Credit limit reached. Cannot add item!");
      return;
    } else {
      const newCourseNames = [...courseNames, card];
      setCourseNames(newCourseNames);
      toast.success("Item added successfully!");
      setTotalCreditHour(newTotalCreditHour);
      setRemainingCreditHour(newRemainingCreditHour);
    }
  };
  return (
    <div className="flex gap-8 mx-auto p-6 md:p-8">
      <Cards cards={cards} handleCard={handleCard} />
      <Cart
        courseNames={courseNames}
        totalCreditHour={totalCreditHour}
        remainingCreditHour={remainingCreditHour}
      />
    </div>
  );
};

Main.propTypes = {
  toast: PropTypes.func,
};

export default Main;
