import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Globals
import { rWidths, colors } from "../../globals/Globals.js";

//============================================ styles =============================================
const DivWrapper = styled.div`
  display: flex;
  background-color: ${colors.grayChateau};

  @media (max-width: ${rWidths.mobile}) {
    display: none;
  }
`;

const LinkItem = styled(Link)`
  font-size: 2rem;
  color: white;
  padding: 0.5rem;
  text-decoration: none;

  &:hover {
    transition: all 0.3s ease-in;
    color: ${colors.malibu};
    cursor: pointer;
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

//=========================================== component ===========================================
const HeaderNavDesktop = props => {
  return (
    <DivWrapper>
      <nav>
        <LinkItem to={`${props.homeLink}`}>Home</LinkItem>
        <LinkItem to={`${props.formsLink}`}>Forms</LinkItem>
        <LinkItem to={`${props.modalsLink}`}>Modals</LinkItem>
      </nav>
    </DivWrapper>
  );
};

export default HeaderNavDesktop;
