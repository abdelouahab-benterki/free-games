// Api hooks
import { useGetPopularGamesQuery } from "../features/api/apiSlice";

// Components
import GamesListItem from "./GamesListItem";

const PopularGamesList = () => {
  const {
    data: games,
    isSuccess,
    isLoading,
    isError,
  } = useGetPopularGamesQuery();

  let content;

  if (isLoading) {
    return;
  } else if (isSuccess) {
    const popularGames = games.slice(0, 6);
    content = popularGames.map((game, index) => (
      <GamesListItem
        key={game.id}
        id={game.id}
        index={index}
        title={game.title}
        thumbnail={game.thumbnail}
        route="/"
      />
    ));
  } else if (isError) {
    <div>Error</div>;
  }

  return (
    isSuccess && (
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center xl:grid-cols-3 gap-4 my-6">
        {content}
      </div>
    )
  );
};
export default PopularGamesList;
