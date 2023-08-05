// Redux, Redux toolkit
import { useDispatch } from "react-redux";
import { hideModal } from "../features/saveModal/saveModalSlice";

// Framer motion
import { AnimatePresence, motion } from "framer-motion";

const SaveModal = () => {
  const dispatch = useDispatch();
  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-0 left-0 w-full h-screen z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div
          className="bg-bgSecondary bg-opacity-50 w-full h-full fixed top-0 left-0 z-20"
          onClick={() => dispatch(hideModal())}
        ></div>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 capitalize bg-gray-900 bg-opacity-90 text-center px-4 py-2 rounded-md text-white z-30 sm:w-fit w-10/12">
          <h2 className="text-lg font-bold mb-2">Done!</h2>
          <p>you can find it in your saved games</p>
          <button
            className="text-sm bg-red-500 px-2 py-1 rounded-sm my-2 uppercase"
            onClick={() => dispatch(hideModal())}
          >
            close
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default SaveModal;
