import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lovedGames: JSON.parse(localStorage.getItem("lovedGames")) ?? [],
};

const lovedGamesSlice = createSlice({
  name: "lovedGames",
  initialState,
  reducers: {
    gameLoved(state, action) {
      const gameIndex = state.lovedGames.indexOf(action.payload);
      if (gameIndex > -1) {
        state.lovedGames.splice(gameIndex, 1);
        localStorage.setItem("lovedGames", JSON.stringify(state.lovedGames));
      } else {
        state.lovedGames.push(action.payload);
        localStorage.setItem("lovedGames", JSON.stringify(state.lovedGames));
      }
    },
  },
});

export default lovedGamesSlice.reducer;
export const { gameLoved } = lovedGamesSlice.actions;
