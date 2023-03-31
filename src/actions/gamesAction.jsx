import axios from "axios";
import {
  popularGamesURL,
  newGamesURL,
  upcomingGamesURL,
  searchedGameURL,
} from "../api";

export const loadGames = () => async (dispatch) => {
  const popularGamesData = await axios.get(popularGamesURL(), {
    params: {
      key: import.meta.env.VITE_RAWG_KEY,
    },
  });
  const newGamesData = await axios.get(newGamesURL(), {
    params: {
      key: import.meta.env.VITE_RAWG_KEY,
    },
  });
  const upcomingGamesData = await axios.get(upcomingGamesURL(), {
    params: {
      key: import.meta.env.VITE_RAWG_KEY,
    },
  });
  dispatch(
    {
      type: "FETCH_GAMES",
      payload: {
        popularGames: popularGamesData.data.results,
        newGames: newGamesData.data.results,
        upcomingGames: upcomingGamesData.data.results,
      },
    },
    []
  );
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchedGames = await axios.get(searchedGameURL(game_name));
  dispatch({
    type: "FETCH_SEARCHED_GAMES",
    payload: {
      searchedGames: searchedGames.data.results,
    },
  });
};
