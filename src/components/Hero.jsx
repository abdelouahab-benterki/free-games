// Assets
import herobg from "../assets/hero-bg.png";

// React Router
import { NavLink } from "react-router-dom";

// Framermotion
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-80 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute top-0 left-0 w-full h-full z-0"
      >
        <img src={herobg} alt="hero" className="h-full w-full object-cover" />
      </motion.div>
      <div className="container relative z-10 flex justify-center items-center flex-col text-whiteColor gap-8">
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="uppercase font-bold sm:text-3xl text-2xl text-center"
        >
          discover the best free to play games
        </motion.p>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex justify-center items-center gap-6 sm:text-lg text-sm text-center capitalize"
        >
          <NavLink
            to="signin"
            className="border-2 border-whiteColor px-4 py-2 rounded-lg hover:bg-whiteColor hover:text-blueColor transition"
          >
            create account
          </NavLink>
          <NavLink
            to="games"
            className="bg-blueColor border-2 border-blueColor px-4 py-2 rounded-lg hover:bg-blue-300 hover:border-blue-300 transition"
          >
            browse games
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
};
export default Hero;
