import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { fadeIn } from "../animations";
import { ReactComponent as Logo } from "../assets/logo.svg";
import DarkMode from "./DarkMode";

const Nav = () => {
  const myRef = useRef(null);
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    if (textInput) {
      dispatch(fetchSearch(textInput));
      executeScroll();
      setTextInput("");
    } else {
      dispatch({ type: "CLEAR_SEARCHED_GAMES" });
    }
  };
  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED_GAMES" });
  };
  const executeScroll = () => {
    myRef.current.scrollIntoView();
  };

  return (
    <StyledDiv>
      <StyledNav variants={fadeIn} initial="hidden" animate="show">
        <DarkMode />
        <LogoDiv onClick={clearSearched}>
          <h1>GameScope</h1>
          <Logo />
        </LogoDiv>
        <SearchDiv>
          <form className="wrapper" onSubmit={submitSearch}>
            <input value={textInput} onChange={inputHandler} type="text" />
            <button type="submit">Search</button>
          </form>
        </SearchDiv>
        <ScrollDiv id="scroll-btn" />
      </StyledNav>
    </StyledDiv>
  );
};

const StyledDiv = styled(motion.div)`
  min-height: 100vh;
  background: var(--background_img);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  padding: 5rem;
  position: relative;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 2rem;
    min-height: 50vh;
  }
`;

const StyledNav = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchDiv = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  form {
    border-radius: 50px;
    outline-color: transparent;
    background-color: white;
    border-radius: 2rem 2rem 2rem 2rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    &:focus {
      box-shadow: var(--box_shadow);
    }
  }

  form:focus-within {
    box-shadow: var(--box_shadow);
  }

  input {
    border: none;
    border-radius: 50px;
    font-size: clamp(0.75rem, 2.5vw, 2rem);
    padding: 0.5rem;
    border: none;
    outline-color: transparent;
    margin-left: 0.5rem;
    &:focus {
      outline: none;
    }
  }
  button {
    border: none;
    border-radius: 50px;
    font-size: clamp(0.75rem, 2.5vw, 2rem);
    font-weight: bold;
    border: none;
    padding: 0.75rem 2rem;
    cursor: pointer;
    background: #9e0a0a;
    color: white;
    border-radius: 2rem 2rem 2rem 2rem;
    @media (max-width: 768px) {
      padding: 0.5rem 1rem;
    }
  }
`;

const LogoDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;

  h1 {
    padding-left: 1rem;
  }
  @media (max-width: 768px) {
    Logo {
      height: 2rem;
    }
  }
  @media (max-width: 468px) {
    svg {
      width: 50px;
    }
  }
`;

const ScrollDiv = styled(motion.div)`
  position: absolute;
  height: 5em;
  width: 3.25em;
  border: 0.3em solid #ffff;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 2em;
  border-radius: 3em;

  :before {
    position: absolute;
    content: "";
    margin: auto;
    left: 0;
    right: 0;
    height: 0.6em;
    width: 0.6em;
    background-color: #ffff;
    border-radius: 50%;
    animation: move-down 2s infinite;
  }

  @media (max-width: 768px) {
    display: none;
  }

  @keyframes move-down {
    80% {
      opacity: 0.5;
    }
    100% {
      transform: translateY(3.3em);
      opacity: 0;
    }
  }

  @keyframes move-down-mobile {
    80% {
      opacity: 0.5;
    }
    100% {
      transform: translateY(1.6em);
      opacity: 0;
    }
  }
`;

export default Nav;
