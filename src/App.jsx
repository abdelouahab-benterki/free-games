// React Router
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import Games from "./pages/Games";
import Signin from "./pages/Signin";
import Saved from "./pages/Saved";
import GameDetails from "./pages/GameDetails";

//layouts
import RootLayout from "./layouts/RootLayout";
import GamesLayout from "./layouts/GamesLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="signin" element={<Signin />} />
      <Route path="saved" element={<Saved />} />
      <Route path=":id" element={<GameDetails />} />
      <Route path="games" element={<GamesLayout />}>
        <Route index element={<Games />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
