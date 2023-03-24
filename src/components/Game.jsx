import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ name, released, id, image }) => {
  return (
    <StyledGame>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  text-align: center;
  border-radius: 1rem;
  img {
    height: 100%;
    border-radius: 0rem 0rem 1rem 1rem;
    object-fit: cover;
    width: 100%;
  }
`;

export default Game;
