import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { fadeIn } from "../animations";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    if (textInput) {
      dispatch(fetchSearch(textInput));
      setTextInput("");
    } else {
      dispatch({ type: "CLEAR_SEARCHED_GAMES" });
    }
  };
  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED_GAMES" });
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h1>GameScope</h1>
      </Logo>
      <SearchDiv>
        <form className="wrapper" onSubmit={submitSearch}>
          <input value={textInput} onChange={inputHandler} type="text" />
          <button type="submit">Search</button>
        </form>
      </SearchDiv>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
`;

const SearchDiv = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  form {
    border-radius: 50px;
    outline-color: transparent;
    border-radius: 2rem 2rem 2rem 2rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    &:focus {
      box-shadow: rgb(177, 1, 1) 0px 3px 8px;
    }
  }

  form:focus-within {
    box-shadow: rgb(177, 1, 1) 0px 3px 8px;
  }

  input {
    border: none;
    border-radius: 50px;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    outline-color: transparent;
    &:focus {
      outline: none;
    }
  }
  button {
    border: none;
    border-radius: 50px;
    font-size: 1.5rem;
    border: none;
    padding: 0.75rem 2rem;

    cursor: pointer;
    background: rgb(177, 1, 1);
    color: white;
    border-radius: 2rem 2rem 2rem 2rem;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;

export default Nav;
