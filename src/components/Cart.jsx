import {FaBangladeshiTakaSign, FaBookOpen} from "react-icons/fa6";
import {BsFillBagFill} from "react-icons/bs";
import {MdRemoveCircle} from "react-icons/md";
import PropTypes from "prop-types";

const Cart = ({
  courseNames,
  totalCreditHour,
  remainingCreditHour,
  totalPrice,
  removeCourse,
}) => {
  return (
    <div className="p-6 card w-[30rem] h-fit bg-white bg-opacity-10 shadow-xl rounded-xl text-white hidden lg:block">
      <div className="text-xl font-bold text-red-500 shadow-xl flex items-center gap-2">
        <FaBookOpen /> Credit Hour Remaining: {remainingCreditHour}
      </div>
      <hr className="border border-gray-500 mt-4" />
      <div className="font-bold text-2xl pt-2 pb-5 text-gray-300 flex items-center gap-2">
        <BsFillBagFill /> Courses List
      </div>
      <ol className="flex flex-col gap-4 min-h-[18rem] list-decimal px-5">
        {courseNames.map((course, idx) => (
          <li key={idx} id={course.id} className="font-semibold opacity-50 ">
            <div className="flex items-center justify-between ">
              {course.title}{" "}
              <button
                onClick={() => removeCourse(course)}
                className="text-white  hover:text-red-600 text-2xl "
              >
                <MdRemoveCircle />
              </button>
            </div>
          </li>
        ))}
      </ol>
      <hr className="border border-gray-500 mt-4" />
      <div className="text-xl font-bold text-red-500 shadow-xl pt-4 flex items-center gap-2">
        <FaBookOpen /> Total Credit Hour: {totalCreditHour}
      </div>
      <hr className="border border-gray-500 mt-4" />
      <div className="text-xl font-bold text-red-500 shadow-xl pt-4 flex items-center gap-2">
        <FaBangladeshiTakaSign /> Total Price: {totalPrice} BDT
      </div>
    </div>
  );
};

Cart.propTypes = {
  courseNames: PropTypes.array,
  totalCreditHour: PropTypes.number,
  remainingCreditHour: PropTypes.number,
  totalPrice: PropTypes.number,
  removeCourse: PropTypes.func,
};

export default Cart;
