// Fontawesome
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

// Redux, Redux toolkit
import { useSelector } from "react-redux";

// Components
import SectionTitle from "../components/SectionTitle";
import SavedListItem from "../components/SavedListItem";
import NoItem from "../components/NoItem";

// Framer motion
import { AnimatePresence } from "framer-motion";

const Saved = () => {
  const savedGamesIds = useSelector((state) => state.savedGames.savedGames);

  const noItem = [<NoItem key={1} />];

  const icon = faFloppyDisk;

  return (
    <div className="container mt-8">
      <section>
        <SectionTitle title={"saved games"} icon={icon} />
        <div className="flex flex-col gap-4 mt-8 mb-10 transition-all">
          <AnimatePresence>
            {savedGamesIds.length > 0
              ? savedGamesIds.map((id, index) => {
                  return <SavedListItem key={id} id={id} index={index} />;
                })
              : noItem}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};
export default Saved;
