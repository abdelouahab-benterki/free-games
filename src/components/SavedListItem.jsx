// React Router
import { NavLink } from "react-router-dom";

// Redux, Redux toolkit
import { useDispatch } from "react-redux";
import { gameDeleted } from "../features/savedgames/savedGamesSlice";

// Api hooks
import { useGetGameByIdQuery } from "../features/api/apiSlice";

// Framer motion
import { motion } from "framer-motion";

const SavedListItem = ({ id, index }) => {
  const { data: data, isSuccess } = useGetGameByIdQuery(id);

  const dispatch = useDispatch();

  return (
    isSuccess && (
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 * index }}
        exit={{ x: 100, opacity: 0 }}
        className="text-whiteColor flex flex-col text-center md:text-left md:flex-row gap-3 items-center bg-bgSecondary p-4 rounded-md shadow-lg shadow-zinc-800"
      >
        <div className="md:w-56 md:h-32 w-full rounded-md overflow-hidden relative group">
          <img
            src={data.thumbnail}
            alt={data.title}
            className="w-full h-full object-cover group-hover:scale-105 transition"
          />
          <NavLink
            to={"/" + id}
            className="w-full h-full absolute top-0 left-0"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-bold capitalize mb-2 sm:mb-1 sm:text-lg">
            {data.title}
          </h3>
          <p className="hidden md:block pb-1 text-sm text-justify">
            {data.short_description}
          </p>

          <div className="uppercase text-xs flex justify-center md:justify-start items-center flex-wrap gap-2 font-medium h-fit">
            <span className="bg-blueColor p-1 rounded-md">{data.genre}</span>
          </div>
        </div>
        <button
          className="bg-red-500 px-2 py-1 rounded md capitalize md:self-end"
          onClick={() => dispatch(gameDeleted(id))}
        >
          delete
        </button>
      </motion.div>
    )
  );
};
export default SavedListItem;
