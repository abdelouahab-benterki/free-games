import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gamesApi = createApi({
  reducerPath: "gamesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://free-to-play-games-database.p.rapidapi.com/api/",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    },
  }),

  endpoints: (builder) => ({
    getGames: builder.query({
      query: (arg) => {
        const { platform, category, sortby } = arg;
        const q = `games?platform=${platform}${
          category ? "&category=" + category : ""
        }${sortby ? "&sort-by=" + sortby : ""}`;

        return q;
      },
    }),
    getPopularGames: builder.query({
      query: () => "games?sort-by=popularity",
    }),
    getGameById: builder.query({
      query: (id) => `game?id=${id}`,
    }),
  }),
});

export const {
  useGetGamesQuery,
  useGetPopularGamesQuery,
  useGetGameByIdQuery,
} = gamesApi;
