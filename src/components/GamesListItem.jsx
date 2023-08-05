// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faHeart } from "@fortawesome/free-solid-svg-icons";

// React Router
import { NavLink } from "react-router-dom";

// Redux, Redux toolkit
import { useDispatch, useSelector } from "react-redux";
import { gameSaved } from "../features/savedgames/savedGamesSlice";
import { showModal } from "../features/saveModal/saveModalSlice";
import { gameLoved } from "../features/lovedGames/lovedGamesSlice";

// Framer motion
import { motion } from "framer-motion";

const GamesListItem = ({ title, id, thumbnail, index = 1 }) => {
  const lovedGames = useSelector((state) => state.lovedGames.lovedGames);

  const dispatch = useDispatch();

  const loved = lovedGames.indexOf(id) > -1 ? true : false;

  return (
    <motion.div
      className="rounded-lg overflow-hidden relative group"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        delay: 0.05 * index,
      }}
    >
      <img
        src={thumbnail}
        alt="game-img"
        className="w-full h-full object-cover group-hover:scale-105 transition"
      />
      <div className="z-20 absolute left-0 bottom-0 w-full flex justify-between items-center p-4 text-whiteColor font-bold bg-black bg-opacity-60">
        <h4>{title}</h4>
        <div className="flex items-center gap-4">
          <FontAwesomeIcon
            icon={faHeart}
            className={
              "hover:text-red-600 cursor-pointer transition " +
              (loved ? "text-red-500" : "")
            }
            onClick={() => dispatch(gameLoved(id))}
          />
          <FontAwesomeIcon
            icon={faFloppyDisk}
            className="hover:text-blueColor cursor-pointer transition"
            onClick={() => {
              dispatch(gameSaved(id));
              dispatch(showModal());
            }}
          />
        </div>
      </div>
      <NavLink
        to={"/" + id}
        className="absolute top-0 left-0 w-full h-full z-10"
      ></NavLink>
    </motion.div>
  );
};
export default GamesListItem;
