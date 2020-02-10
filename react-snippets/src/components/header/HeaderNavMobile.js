import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Globals
import { rWidths, rHeights, colors } from "../../globals/Globals.js";

//============================================ styles =============================================
const DivWrapper = styled.div`
  display: none;

  @media (max-width: ${rWidths.mobile}) {
    display: flex;
    position: fixed;
    z-index: 2;
    top: ${props =>
      props.hamburgeropen === "true" ? rHeights.headerHeight : "-25rem"};
    background-color: ${colors.grayChateau};
    transition: all 0.3s ease-in-out;
    width: 100%;
    flex-direction: column;
    border-bottom: 1px solid black;
  }
`;

const DivLinkItem = styled.div`
  @media (max-width: ${rWidths.mobile}) {
    width: 14.5rem;
  }
`;

const LinkItem = styled(Link)`
  @media (max-width: ${rWidths.mobile}) {
    font-size: 4rem;
    text-decoration: none;
    padding: 2rem 1.5rem;
    color: white;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  &:hover {
    transition: all 0.3s ease-in;
    color: ${colors.malibu};
    background-color: white;
  }
`;

//=========================================== component ===========================================
const HeaderNavMobile = props => {
  return (
    <DivWrapper
      hamburgeropen={props.hamburgerOpen.toString()}
      onClick={ev => props.closeHamburgerMenu(ev)}
    >
      <nav>
        <LinkItem to={`${props.homeLink}`}>
          <DivLinkItem>Home</DivLinkItem>
        </LinkItem>

        <LinkItem to={`${props.formsLink}`}>
          <DivLinkItem>Forms</DivLinkItem>
        </LinkItem>
        <LinkItem to={`${props.modalsLink}`}>
          <DivLinkItem>Modals</DivLinkItem>
        </LinkItem>
      </nav>
    </DivWrapper>
  );
};

export default HeaderNavMobile;
