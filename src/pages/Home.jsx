import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import styled from "styled-components";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import imageUrl from "../assets/logo.png";
import { useLocation } from "react-router-dom";
import { fadeIn } from "../animations";

//Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  if (!pathId) {
    document.body.style.overflow = "auto";
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { upcomingGames, popularGames, newGames, searchedGames } = useSelector(
    (state) => state.games
  );
  return (
    <div>
      <GameList variants={fadeIn} initial="hidden" animate="show">
        <LayoutGroup type="crossfade">
          <AnimatePresence>
            {pathId && <GameDetail pathId={pathId} />}
          </AnimatePresence>
          {searchedGames.length > 0 && (
            <div className="searched">
              <h2>Searched Games</h2>
              <Games>
                {searchedGames.map((game) => (
                  <Game
                    key={game.id}
                    name={game.name}
                    released={game.released}
                    id={game.id}
                    image={game.background_image}
                  />
                ))}
              </Games>
            </div>
          )}
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
        </LayoutGroup>
      </GameList>
    </div>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 10rem;
  @media (max-width: 768px) {
    padding: 0rem 5rem;
  }
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }
`;

export default Home;
