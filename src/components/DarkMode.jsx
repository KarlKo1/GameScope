import React from "react";
import { ReactComponent as Sun } from "../assets/sun.svg";
import { ReactComponent as Moon } from "../assets/moon.svg";
import styled from "styled-components";

const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };
  const selectedTheme = localStorage.getItem("selectedTheme");
  if (selectedTheme === "dark") {
    setDarkMode();
  }
  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };
  return (
    <StyledDarkMode>
      <StyledInput
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark"}
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
      />
      <StyledLabel className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </StyledLabel>
    </StyledDarkMode>
  );
};

const StyledDarkMode = styled.div`
  position: absolute;
  right: 0;
  padding: 3rem;
  @media (max-width: 768px) {
    padding: 3rem;
    top: 0;
  }
`;

const StyledInput = styled.input`
  width: 0;
  height: 0;
  visibility: hidden;
  :checked + .dark_mode_label {
    background: #571c1c;
  }
  :checked + .dark_mode_label:after {
    left: 62px;
    transform: translateX(-100%);
    background: linear-gradient(180deg, #3a3a3a, #b10101);
  }
  :checked + .dark_mode_label svg.sun {
    fill: #7e7e7e;
  }
  :checked + .dark_mode_label svg.moon {
    fill: #fff;
  }
`;

const StyledLabel = styled.label`
  width: 65px;
  height: 30px;
  position: relative;
  display: block;
  background: #ebebeb;
  border-radius: 200px;
  box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4),
    inset 0px -5px 15px rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: 0.3s;
  :after {
    content: "";
    width: 25px;
    height: 25px;
    position: absolute;
    top: 3px;
    left: 3px;
    background: linear-gradient(180deg, #ffffff, #ffffff);
    border-radius: 180px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }
  :active:after {
    width: 30px;
  }
  svg {
    position: absolute;
    width: 20px;
    top: 5px;
    z-index: 100;
  }
  svg.sun {
    left: 5px;
    fill: rgb(202, 172, 0);
    transition: 0.3s;
  }
  svg.moon {
    left: 40px;
    fill: #7e7e7e;
    transition: 0.3s;
  }
`;

export default DarkMode;
