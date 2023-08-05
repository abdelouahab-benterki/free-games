// React Router
import { NavLink, Outlet } from "react-router-dom";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faHeart } from "@fortawesome/free-solid-svg-icons";

// Redux, Redux Toolkit
import { useSelector } from "react-redux";

const RootLayout = () => {
  const savedGamesCount = useSelector(
    (state) => state.savedGames.savedGames.length
  );

  const saveModal = useSelector((state) => state.saveModal.saveModal);
  return (
    <div>
      <header className="bg-bgSecondary text-whiteColor">
        <div className="container py-4">
          <nav className="flex justify-between items-center">
            <NavLink to="/">
              <div className="font-['anton'] text-2xl capitalize">
                free games
              </div>
            </NavLink>
            <NavLink to="saved">
              <div className="flex items-center gap-4 text-lg capitalize bg-blueColor hover:bg-blue-400 transition px-6 py-2 rounded-full relative">
                <p className="hidden sm:block">saved games</p>
                <FontAwesomeIcon icon={faGamepad} className="text-2xl" />
                <span className="text-whiteColor bg-red-500 rounded-full w-4 h-4 text-xs flex justify-center items-center font-bold absolute right-0 -bottom-1">
                  {savedGamesCount}
                </span>
              </div>
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="min-h-[calc(100vh-170px)] relative">
        <Outlet />
      </main>

      <footer className="text-whiteColor flex justify-center items-center py-4 text-xs sm:text-lg font-bold bg-bgSecondary">
        Made with{" "}
        <FontAwesomeIcon icon={faHeart} className="text-red-600 px-2" /> by
        <a
          href="https://www.linkedin.com/in/abdelouahab-benterki-519232256/"
          className="px-2 text-blueColor"
        >
          Abdelouahab Benterki
        </a>
      </footer>
    </div>
  );
};

export default RootLayout;
