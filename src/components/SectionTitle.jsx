// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Framer motion
import { motion } from "framer-motion";

const SectionTitle = ({ title, icon }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-whiteColor font-bold text-xl capitalize flex justify-start items-center gap-2"
    >
      <FontAwesomeIcon icon={icon} className="text-2xl" />
      <h2>{title}</h2>
    </motion.div>
  );
};
export default SectionTitle;
