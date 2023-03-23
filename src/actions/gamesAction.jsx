import axios from "axios";
import { popularGamesURL, newGamesURL, upcomingGamesURL } from "../api";

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
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popularGames: popularGamesData.data.results,
      newGames: newGamesData.data.results,
      upcomingGames: upcomingGamesData.data.results,
    },
  });
};
