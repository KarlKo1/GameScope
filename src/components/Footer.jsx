import React from "react";
import styled from "styled-components";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <FooterElement>
      <FooterContent>
        <h3>GameScope</h3>
        <p>
          Browse and search for your <span>Favourite</span> video games{" "}
        </p>
        <p>SOCIALS</p>
        <Socials>
          <li>
            <a href="https://github.com/KarlKo1" target="_blank">
              <BsGithub size="25px" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/karlako/" target="_blank">
              <BsLinkedin size="25px" />
            </a>
          </li>
        </Socials>
      </FooterContent>
      <FooterBottom>
        <p className="copyright">
          All product names, logos, and brands are property of their respective
          owners. All company, product and service names used in this website
          are for identification purposes only. Use of these names, logos, and
          brands does not imply endorsement.
        </p>
        <p>Karl Ko &copy;2023</p>
      </FooterBottom>
    </FooterElement>
  );
};

const FooterElement = styled.footer`
  position: absolute;
  left: 0;
  right: 0;
  background: #111;
  height: auto;
  padding-top: 40px;
  margin-top: 3rem;
  color: #fff;
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  h3 {
    font-size: 2.1rem;
    font-weight: 500;
    text-transform: capitalize;
    line-height: 3rem;
  }
  p {
    line-height: 28px;
    font-size: 14px;
    color: #cacdd2;
  }
`;

const Socials = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 3rem 0;
  @media (max-width: 500px) {
    display: flex;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  li {
    margin: 0 10px;
  }
  a {
    text-decoration: none;
    color: #fff;
    transition: 0.3s;
    &:hover {
      color: var(--span_color);
      transition: 0.3s;
    }
  }
`;

const FooterBottom = styled.div`
  background: #000;
  padding: 20px;
  text-align: center;
  p {
    float: center;
    font-size: 14px;
    &.copyright {
      font-size: clamp(0.75rem, 2.5vw, 0.1rem);
    }
  }
`;

export default Footer;
