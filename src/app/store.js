import { configureStore } from "@reduxjs/toolkit";

// Api reducer
import { gamesApi } from "../features/api/apiSlice";

// Reducers
import filterReducer from "../features/filter/filterSlice";
import savedGamesReducer from "../features/savedgames/savedGamesSlice";
import saveModalReducer from "../features/saveModal/saveModalSlice";
import lovedGamesReducer from "../features/lovedGames/lovedGamesSlice";

const store = configureStore({
  reducer: {
    filter: filterReducer,
    savedGames: savedGamesReducer,
    saveModal: saveModalReducer,
    lovedGames: lovedGamesReducer,
    [gamesApi.reducerPath]: gamesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(gamesApi.middleware);
  },
});

export default store;
