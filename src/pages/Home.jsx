import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import styled from "styled-components";
import { motion } from "framer-motion";
import imageUrl from "../assets/logo.png";
import { useLocation } from "react-router-dom";

//Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { upcomingGames, popularGames, newGames } = useSelector(
    (state) => state.games
  );

  return (
    <div>
      <Heading>
        <img src={imageUrl} alt="logo" />
        <h1>GameScope</h1>
      </Heading>
      <GameList>
        {pathId && <GameDetail />}
        <h2>Upcoming Games</h2>
        <Games>
          {upcomingGames.map((game) => (
            <Game
              key={game.id}
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popularGames.map((game) => (
            <Game
              key={game.id}
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              key={game.id}
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
            />
          ))}
        </Games>
      </GameList>
    </div>
  );
};

const Heading = styled(motion.div)`
  padding: 0rem 10rem;
  display: flex;
  align-items: center;
  h1 {
    padding-top: 5rem 0rem;
    color: #d30d0d;
  }

  img {
    max-width: 15%;
  }
`;

const GameList = styled(motion.div)`
  padding: 0rem 10rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
