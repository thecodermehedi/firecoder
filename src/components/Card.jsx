import {FaBangladeshiTakaSign, FaBookOpen} from "react-icons/fa6";
import PropTypes from "prop-types";
const Card = ({card, handleCard}) => {
  const {coverImage, title, description, price, credit} = card;
  return (
    <div className="card w-[20rem] h-[35rem] bg-white bg-opacity-10 shadow-xl rounded-xl border border-transparent hover:border-purple-500 hover:drop-shadow-[0_0_7px_rgba(168,85,247,0.5)] transition-all duration-300 cursor-pointer">
      <figure className="px-5 pt-5">
        <img
          src={coverImage}
          alt="Shoes"
          className="rounded-xl max-w-72 w-fit h-48"
        />
      </figure>
      <div className="card-body px-5">
        <h2 className="card-title text-white">{title}</h2>
        <p className=" text-white opacity-50">{description}</p>
        <div className="flex justify-between items-center w-full text-white">
          <span className="font-semibold opacity-50 flex items-center gap-2">
            <FaBangladeshiTakaSign /> Price: {price} BDT
          </span>
          <span className="font-semibold opacity-50 flex items-center gap-2">
            <FaBookOpen /> Credit: {credit}hr
          </span>
        </div>
        <div className="card-actions w-full">
          <button
            onClick={() => handleCard(card)}
            className="btn border-none bg-red-500 w-full min-h-0 h-10 capitalize font-bold text-lg hover:text-white text-gray-800 hover:bg-purple-700 hover:drop-shadow-[0_0_7px_rgba(168,85,247,0.5)] transition-all hover:border-transparent shadow-xl "
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
  handleCard: PropTypes.func,
};

export default Card;
