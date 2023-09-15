import PropTypes from "prop-types";

const Cart = ({courseNames, totalCreditHour, remainingCreditHour}) => {
  return (
    <div className="p-5 card w-[20rem] h-fit bg-white bg-opacity-10 shadow-xl rounded-xl text-white">
      <h3 className="text-xl font-bold text-red-500 shadow-xl">
        Credit Hour Remaining: {remainingCreditHour} hr
      </h3>
      <hr className="border border-gray-500 mt-4" />
      <h2 className="font-bold text-2xl py-2 text-gray-300">Course Name</h2>
      <ol className="flex flex-col gap-4 min-h-[19rem] list-decimal px-5">
        {courseNames.map((course, idx) => (
          <li key={idx} id={course.id} className="font-semibold opacity-50 ">
            {course.title}
          </li>
        ))}
      </ol>
      <hr className="border border-gray-500 mt-4" />
      <h3 className="text-xl font-bold text-red-500 shadow-xl pt-4">
        Total Credit Hour: {totalCreditHour} hr
      </h3>
      <hr className="border border-gray-500 mt-4" />
      <h3 className="text-xl font-bold text-red-500 shadow-xl pt-4">
        Total Price: 48000 BDT
      </h3>
    </div>
  );
};

Cart.propTypes = {
  courseNames: PropTypes.array,
  totalCreditHour: PropTypes.number,
  remainingCreditHour: PropTypes.number
};

export default Cart;
