import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedGames: JSON.parse(localStorage.getItem("savedGames")) ?? [],
};

const savedGamesSlice = createSlice({
  name: "savedGames",
  initialState,
  reducers: {
    gameSaved(state, action) {
      const game = state.savedGames.indexOf(action.payload);
      if (game > -1) return;
      state.savedGames.push(action.payload);
      localStorage.setItem("savedGames", JSON.stringify(state.savedGames));
    },
    gameDeleted(state, action) {
      const gameIndex = state.savedGames.indexOf(action.payload);
      if (gameIndex > -1) {
        state.savedGames.splice(gameIndex, 1);
        localStorage.setItem("savedGames", JSON.stringify(state.savedGames));
      }
    },
  },
});

export default savedGamesSlice.reducer;
export const { gameSaved, gameDeleted } = savedGamesSlice.actions;
