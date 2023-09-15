import {
  faBangladeshiTakaSign,
  faBookOpen,
  faBucket,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const Cart = ({
  courseNames,
  totalCreditHour,
  remainingCreditHour,
  totalPrice,
}) => {
  return (
    <div className="p-5 card w-[30rem] h-fit bg-white bg-opacity-10 shadow-xl rounded-xl text-white">
      <h3 className="text-xl font-bold text-red-500 shadow-xl">
        <FontAwesomeIcon icon={faBookOpen} /> Credit Hour Remaining:{" "}
        {remainingCreditHour}
      </h3>
      <hr className="border border-gray-500 mt-4" />
      <h2 className="font-bold text-2xl py-2 text-gray-300">
        {" "}
        <FontAwesomeIcon icon={faBucket} /> Courses
      </h2>
      <ol className="flex flex-col gap-4 min-h-[19rem] list-decimal px-5">
        {courseNames.map((course, idx) => (
          <li key={idx} id={course.id} className="font-semibold opacity-50 ">
            {course.title}
          </li>
        ))}
      </ol>
      <hr className="border border-gray-500 mt-4" />
      <h3 className="text-xl font-bold text-red-500 shadow-xl pt-4">
        <FontAwesomeIcon icon={faBookOpen} /> Total Credit Hour:{" "}
        {totalCreditHour}
      </h3>
      <hr className="border border-gray-500 mt-4" />
      <h3 className="text-xl font-bold text-red-500 shadow-xl pt-4">
        <FontAwesomeIcon icon={faBangladeshiTakaSign} /> Total Price:{" "}
        {totalPrice} BDT
      </h3>
    </div>
  );
};

Cart.propTypes = {
  courseNames: PropTypes.array,
  totalCreditHour: PropTypes.number,
  remainingCreditHour: PropTypes.number,
  totalPrice: PropTypes.number,
};

export default Cart;
