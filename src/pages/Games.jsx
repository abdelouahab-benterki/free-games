// Api hooks
import { useGetGamesQuery } from "../features/api/apiSlice";

// Redux, Redux toolkit
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../features/page/pageSlice";

// Components
import GamesListItem from "../components/GamesListItem";
import Spinner from "../components/Spinner";
import SaveModal from "../components/SaveModal";

const Games = () => {
  const numberOfItems = 18;

  const dispatch = useDispatch();

  const filters = useSelector((state) => state.filter);
  const saveModal = useSelector((state) => state.saveModal.visible);
  const page = useSelector((state) => state.page.page);

  const { data: data, isLoading, isSuccess } = useGetGamesQuery(filters);

  // Games Array
  let content = [];

  // Paginations Array
  let items = [];

  if (isLoading) {
    return <Spinner />;
  } else if (isSuccess) {
    // Pagination Creation Logic
    for (let i = 1; i <= Math.ceil(data.length / numberOfItems); i++) {
      items.push(
        <div
          key={i}
          className="bg-blueColor text-whiteColor text-lg rounded-full w-8 h-8 p-6 border-2 border-transparent flex justify-center items-center cursor-pointer hover:bg-transparent hover:text-blueColor hover:border-blueColor transition"
          onClick={() => {
            dispatch(setPage(i - 1));
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          {i}
        </div>
      );
    }

    // Adding games to the content array
    for (
      let i = page * numberOfItems;
      i < page * numberOfItems + numberOfItems;
      i++
    ) {
      if (data[i]) {
        content.push(
          <GamesListItem
            key={data[i].id}
            id={data[i].id}
            title={data[i].title}
            thumbnail={data[i].thumbnail}
            route="/"
          />
        );
      } else {
        continue;
      }
    }
  }

  return (
    isSuccess && (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center xl:grid-cols-3 gap-4 my-6">
          {content}
        </div>
        <div className="flex justify-center items-center flex-wrap gap-2 my-4 xl:px-44">
          {items}
        </div>
        {saveModal && <SaveModal />}
      </>
    )
  );
};
export default Games;
