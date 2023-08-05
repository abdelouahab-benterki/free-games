// React
import { useState, useRef, useEffect } from "react";

// Fontawesome
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Redux, Redux toolkit
import { useDispatch } from "react-redux";
import { filterChange } from "../features/filter/filterSlice";
import { setPage } from "../features/page/pageSlice";

const FilterBox = ({ name, options }) => {
  const [filterHeight, setFilterHeight] = useState(0);
  const [filterOptionHeight, setFilterOptionHeight] = useState(0);
  const filterOptionRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setFilterOptionHeight(filterOptionRef.current.clientHeight);
  }, []);

  const listHeight = options.length * filterOptionHeight + 10;

  return (
    <div className="w-fit relative">
      <div
        className="w-full flex justify-center items-center gap-2 text-whiteColor capitalize font-medium text-lg cursor-pointer my-2 hover:text-gray-200 transition"
        onClick={() => {
          if (filterHeight == 0) {
            if (listHeight > 500) {
              setFilterHeight("500px");
            } else {
              setFilterHeight(listHeight);
            }
          } else {
            setFilterHeight(0);
          }
        }}
      >
        <p>{name}</p>
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
      <div
        className="text-gray-800 w-44 bg-whiteColor rounded-md absolute z-20 shadow-md top-10 right-0 transition-all overflow-y-auto"
        style={{ maxHeight: filterHeight }}
      >
        {options.map((option, i) => (
          <button
            onClick={() => {
              dispatch(setPage(0));
              dispatch(
                filterChange({
                  name: name.replace("-", "").replace(/\s/g, ""),
                  value: option,
                })
              );
              setFilterHeight(0);
            }}
            className="filter-option"
            ref={filterOptionRef}
            key={i}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
export default FilterBox;
