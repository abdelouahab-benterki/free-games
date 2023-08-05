// Fontawesome
import {
  faCircle,
  faFloppyDisk,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Redux, Redux toolkit
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../features/saveModal/saveModalSlice";
import { gameSaved } from "../features/savedgames/savedGamesSlice";
import { gameLoved } from "../features/lovedGames/lovedGamesSlice";

// Api hooks
import { useGetGameByIdQuery } from "../features/api/apiSlice";

// React Router
import { useParams } from "react-router-dom";

// Framer motion
import { motion } from "framer-motion";

// Components
import Spinner from "../components/Spinner";
import SaveModal from "../components/SaveModal";

const GameDetails = () => {
  const { id } = useParams();

  const saveModal = useSelector((state) => state.saveModal.visible);
  const lovedGames = useSelector((state) => state.lovedGames.lovedGames);

  const dispatch = useDispatch();

  const { data: data, isLoading, isSuccess } = useGetGameByIdQuery(id);

  const loved = lovedGames.indexOf(Number(id)) > -1 ? true : false;

  if (isLoading) {
    return <Spinner />;
  } else if (isSuccess) {
    const screenshots = [...data.screenshots];

    // If requirements does not exist in the returnde json
    const requirements = data.minimum_system_requirements ?? {
      os: "unknown",
      processor: "unknown",
      memory: "unknown",
      graphics: "unknown",
      storage: "unknown",
    };

    return (
      <>
        <div className="text-whiteColor container">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="font-bold text-2xl mt-10"
          >
            {data.title}
            <span className="ml-4 text-sm text-green-500 align-middle">
              <FontAwesomeIcon icon={faCircle} />
              <span className="ml-1">{data.status}</span>
            </span>
          </motion.h2>
          <div className="flex md:flex-row flex-col gap-4 mt-8 md:h-[450px]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="md:w-3/4 w-full h-full"
            >
              <img
                src={screenshots[0].image}
                alt="img"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="md:w-1/4 w-full sm:h-full h-20 flex md:grid md:grid-rows-3 justify-between gap-2"
            >
              {screenshots.map((screenshot, index) => {
                if (index == 0 || index > 3) return "";
                return (
                  <div className="w-11/12 sm:h-[140px] h-full" key={index}>
                    <img
                      src={screenshot.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}
            </motion.div>
          </div>

          <section className="md:flex my-10 gap-2">
            <motion.section
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="md:w-3/4 md:border-r md:pr-4"
            >
              <section>
                <h3 className="text-xl font-bold mb-2">Description:</h3>
                <p className="text-justify">{data.description}</p>
              </section>
              <section>
                <h3 className="text-xl font-bold mt-6 mb-2">
                  Minimum System Requirements:
                </h3>
                <ul className="font-bold capitalize leading-10">
                  {Object.keys(requirements).map((key, index) => (
                    <li key={index}>
                      {key}:
                      <span className="font-normal ml-1">
                        {requirements[key]}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </motion.section>
            <motion.section
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex-grow md:pl-4"
            >
              <h3 className="text-xl font-bold mb-2 mt-6 md:mt-0">
                General Informations:
              </h3>
              <ul className="font-bold capitalize leading-10">
                <li>
                  genre: <span className="font-normal">{data.genre}</span>
                </li>
                <li>
                  platform: <span className="font-normal">{data.platform}</span>
                </li>
                <li>
                  publisher:{" "}
                  <span className="font-normal">{data.publisher}</span>
                </li>
                <li>
                  developer:{" "}
                  <span className="font-normal">{data.developer}</span>
                </li>
                <li>
                  release date:{" "}
                  <span className="font-normal">{data.release_date}</span>
                </li>
              </ul>
              <div className="my-8 flex items-center justify-center sm:justify-start flex-wrap gap-4">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={data.game_url}
                  className="bg-blueColor border-2 border-blueColor px-8 py-2 rounded-md font-bold hover:bg-blue-300 hover:border-blue-300 transition uppercase"
                >
                  play now
                </a>
                <div className="flex items-center gap-2">
                  <span
                    className="py-2 px-4 border-2 border-blueColor rounded-md text-blueColor cursor-pointer hover:bg-blueColor hover:text-whiteColor transition"
                    onClick={() => {
                      dispatch(gameSaved(Number(id)));
                      dispatch(showModal());
                    }}
                  >
                    <FontAwesomeIcon icon={faFloppyDisk} />
                  </span>
                  <span
                    className={
                      "py-2 px-4 border-2 border-red-500 rounded-md  cursor-pointer hover:text-whiteColor hover:bg-red-500 transition " +
                      (loved ? "bg-red-500 text-whiteColor" : "text-red-500")
                    }
                    onClick={() => dispatch(gameLoved(Number(id)))}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </span>
                </div>
              </div>
            </motion.section>
          </section>
        </div>
        {saveModal && <SaveModal />}
      </>
    );
  }
};
export default GameDetails;
