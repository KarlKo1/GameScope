//BASE URL
const BASE_URL = "https://api.rawg.io/api/";

//Get date
const getDate = () => {
  return new Date().toISOString().slice(0, 10);
};
const currentDate = getDate();
const currentYear = new Date().getFullYear();
const lastYear = getDate().slice(0, 4) - 1;
const nextYear = getDate().slice(0, 4) + 1;

const POPULAR_GAMES = `games?key=${
  import.meta.env.VITE_RAWG_KEY
}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${BASE_URL}${POPULAR_GAMES}`;
console.log(popularGamesURL);
