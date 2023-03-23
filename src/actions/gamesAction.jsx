import axios from "axios";
import { popularGamesURL } from "../api";

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL(), {
    params: {
      key: import.meta.env.VITE_RAWG_KEY,
    },
  });
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popularGames: popularData.data.results,
    },
  });
};
