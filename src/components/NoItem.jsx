// Framer motion
import { motion } from "framer-motion";

const NoItem = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-whiteColor text-center font-medium capitalize transition-all"
    >
      <p>You didn&apos;t save any item yet</p>
    </motion.div>
  );
};
export default NoItem;
