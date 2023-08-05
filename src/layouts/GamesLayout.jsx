import SectionTitle from "../components/SectionTitle";
import { faFilter, faGamepad } from "@fortawesome/free-solid-svg-icons";
import FilterBox from "../components/FilterBox";
import Games from "../pages/Games";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const GamesLayout = () => {
  const categories = [
    "mmorpg",
    "shooter",
    "strategy",
    "moba",
    "racing",
    "sports",
    "social",
    "sandbox",
    "open-world",
    "survival",
    "pvp",
    "pve",
    "pixel",
    "voxel",
    "zombie",
    "turn-based",
    "first-person",
    "third-Person",
    "top-down",
    "tank",
    "space",
    "sailing",
    "side-scroller",
    "superhero",
    "permadeath",
    "card",
    "battle-royale",
    "mmo",
    "mmofps",
    "mmotps",
    "3d",
    "2d",
    "anime",
    "fantasy",
    "sci-fi",
    "fighting",
    "action-rpg",
    "action",
    "military",
    "martial-arts",
    "flight",
    "low-spec",
    "tower-defense",
    "horror",
    "mmorts",
  ];
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="min-h-full">
      <div className="container min-h-full">
        <AnimatePresence>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="flex justify-between items-center mt-10"
          >
            <SectionTitle title="free games list" icon={faGamepad} />
            <div
              className={
                "flex md:flex-row flex-col items-center justify-center gap-16 fixed md:static bg-bgPrimary md:bg-transparent bg-opacity-95 w-screen md:w-auto h-screen md:h-auto pb-60 md:pb-0 top-0 left-0 z-40 md:pt-0 transition md:-translate-x-0 " +
                (!showFilter ? "-translate-x-full" : "")
              }
            >
              <div className="text-white absolute -translate-y-56 text-3xl font-bold text-center md:hidden flex items-center justify-around w-full">
                <h2 className="m-0">Apply Filters</h2>
                <button
                  className="text-xs uppercase bg-red-600 py-2 px-4 rounded-md"
                  onClick={() => setShowFilter(false)}
                >
                  close
                </button>
              </div>
              <FilterBox name={"category"} options={categories} />
              <FilterBox name={"platform"} options={["pc", "browser", "all"]} />
              <FilterBox
                name={"sort by"}
                options={[
                  "release-date",
                  "popularity",
                  "alphabetical",
                  "relevance",
                ]}
              />
            </div>
            <button
              className="text-white text-lg flex justify-center items-center gap-2 bg-blueColor px-4 py-2 rounded-md md:hidden"
              onClick={() => setShowFilter(true)}
            >
              <span className="capitalize">filter</span>
              <FontAwesomeIcon icon={faFilter} />
            </button>
          </motion.div>
        </AnimatePresence>

        <Games />
      </div>
    </div>
  );
};
export default GamesLayout;
