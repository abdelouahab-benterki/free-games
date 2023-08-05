// Fontawesome
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Spinner = () => {
  return (
    <div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-blueColor border-4 rounded-full w-24 h-24 flex justify-center items-center border-y-blueColor animate-pulse">
        <FontAwesomeIcon icon={faGamepad} />
      </div>
    </div>
  );
};
export default Spinner;
