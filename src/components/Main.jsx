import {useState, useEffect} from "react";
import Cards from "./Cards";
import Cart from "./Cart";
import {PropTypes} from "prop-types";

const Main = ({toast}) => {
  const [cards, setCards] = useState([]);
  const [courseNames, setCourseNames] = useState([]);
  const [totalCreditHour, setTotalCreditHour] = useState(0);
  const [remainingCreditHour, setRemainingCreditHour] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/courses.json");
        const data = await res.json();
        setCards(data);
      } catch (error) {
        console.error("Error fetchind data:", error);
      }
    };
    fetchData();
  }, []);
  const handleCard = (card) => {
    const newTotalCreditHour = totalCreditHour + card.credit;
    const newRemainingCreditHour = remainingCreditHour - card.credit;
    const newTotalPrice = totalPrice + card.price;
    if (courseNames.includes(card)) {
      toast.warn("Item already added!");
      return;
    } else if (newRemainingCreditHour < 0) {
      toast.error("Credit limit reached. Cannot add item!");
      return;
    } else {
      const newCourseNames = [...courseNames, card];
      setCourseNames(newCourseNames);
      toast.success("Item added successfully!");
      setTotalCreditHour(newTotalCreditHour);
      setRemainingCreditHour(newRemainingCreditHour);
      setTotalPrice(newTotalPrice);
    }
  };
  const removeCourse = (card) => {
    const newCourseList = courseNames.filter((course) => course.id !== card.id);
    setCourseNames(newCourseList);
    const newTotalCreditHour = totalCreditHour - card.credit;
    setTotalCreditHour(newTotalCreditHour);
    const newRemainingCreditHour = remainingCreditHour + card.credit;
    if (newTotalCreditHour > 20) {
      toast.error("Credit limit reached");
      return;
    }
    setRemainingCreditHour(newRemainingCreditHour);
    const newTotalPrice = totalPrice - card.price;
    setTotalPrice(newTotalPrice);
    toast.error("Item removed successfully!");
  };
  return (
    <div className="flex gap-8 mx-auto p-6 md:p-8">
      <Cards cards={cards} handleCard={handleCard} />
      <Cart
        courseNames={courseNames}
        totalCreditHour={totalCreditHour}
        remainingCreditHour={remainingCreditHour}
        totalPrice={totalPrice}
        removeCourse={removeCourse}
      />
    </div>
  );
};

Main.propTypes = {
  toast: PropTypes.func,
};

export default Main;
