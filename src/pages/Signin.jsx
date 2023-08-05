// Framer motion
import { motion } from "framer-motion";

const Signin = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container text-whiteColor my-8"
    >
      <h2 className="capitalize text-xl font-bold text-center">
        this functionality is not available yet
      </h2>
    </motion.div>
  );
};
export default Signin;
