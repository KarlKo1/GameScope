import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";
import { popUp } from "../animations";

const Game = ({ name, released, id, image }) => {
  const stringPathId = id.toString();
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <Link to={`/game/${id}`}>
      <StyledGame
        layoutId={stringPathId}
        onClick={loadDetailHandler}
        variants={popUp}
        initial="hidden"
        animate="show"
        style={{
          background: `url(${smallImage(image, 640)})`,
          backgroundSize: "cover",
        }}
        alt={name}
      >
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
      </StyledGame>
    </Link>
  );
};

const StyledGame = styled(motion.div)`
  display: flex;
  flex-direction: column;
  min-height: 30vh;
  box-shadow: var(--box_shadow);
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  color: white;
  padding: 2rem;
  h3,
  p {
    text-shadow: 0 0 3px black;
  }
`;

export default Game;
