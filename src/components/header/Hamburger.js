import React from "react";
import styled from "styled-components";

// globals
import { rWidths } from "../../globals/Globals.js";

//============================================ styles =============================================
const DivHamburger = styled.div`
  display: none;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${rWidths.mobile}) {
    display: inline-block;
    padding: 1.3rem 3.5rem;
  }
`;

const DivBarTop = styled.div`
  width: 4rem;
  height: 0.5rem;
  margin: 1rem 0;
  background-color: white;
  transition: 0.4s;
  border-radius: 8px;

  transform: ${props =>
    props.hamburgeropen === "true" && "rotate(-45deg) translate(-1rem,1rem)"};

  @media (max-width: 380px) {
    width: 3.5rem;
    margin: 0.6rem 0;
    transform: ${props =>
      props.hamburgeropen === "true" &&
      "rotate(-45deg) translate(-0.8rem, 0.7rem)"};
  }
`;

const DivBarMid = styled.div`
  width: 4rem;
  height: 0.5rem;
  margin: 1rem 0;
  background-color: white;
  transition: 0.4s;
  border-radius: 8px;

  opacity: ${props => props.hamburgeropen === "true" && "0"};

  @media (max-width: 380px) {
    width: 3.5rem;
    margin: 0.6rem 0;
  }
`;

const DivBarBot = styled.div`
  width: 4rem;
  height: 0.5rem;
  margin: 1rem 0;
  background-color: white;
  transition: 0.4s;
  border-radius: 8px;

  transform: ${props =>
    props.hamburgeropen === "true" &&
    "rotate(46deg) translate(-1.1rem,-1.1rem)"};

  @media (max-width: 380px) {
    width: 3.5rem;
    margin: 0.6rem 0;
    transform: ${props =>
      props.hamburgeropen === "true" &&
      "rotate(45deg) translate(-0.8rem, -0.8rem)"};
  }
`;

//=========================================== component ===========================================
const Hamburger = props => {
  return (
    <DivHamburger
      onClick={ev => props.setHamburgerMenu(ev, !props.hamburgerOpen)}
    >
      <DivBarTop hamburgeropen={props.hamburgerOpen.toString()} />
      <DivBarMid hamburgeropen={props.hamburgerOpen.toString()} />
      <DivBarBot hamburgeropen={props.hamburgerOpen.toString()} />
    </DivHamburger>
  );
};

export default Hamburger;
