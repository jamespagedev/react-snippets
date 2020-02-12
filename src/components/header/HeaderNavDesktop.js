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
  color: ${props => (props.dropdownitem ? "black" : "white")};
  padding: ${props => (props.dropdownitem ? "2rem" : "0.5rem")};
  text-decoration: none;
  margin-right: ${props => (props.dropdownitem ? "0" : "1rem")};

  &:hover {
    transition: all 0.3s ease-in;
    color: ${colors.malibu};
    cursor: pointer;
  }
`;

const DivDropdownContent = styled.div`
  display: none;
  position: absolute;
  top: 2.5rem;
  padding: 1rem 0;
  right: 0;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

const DivDropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DivDropdownContent} {
    display: block;
  }
`;

const SpanDropdownMore = styled.span`
  font-size: 2rem;
  color: white;
  padding: 0.5rem;
  text-decoration: none;

  &:hover {
    cursor: pointer;
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
        <DivDropdown>
          <SpanDropdownMore>More&nbsp;<i className="fas fa-chevron-down"></i></SpanDropdownMore>
          <DivDropdownContent>
          <LinkItem dropdownitem={true.toString()} to={`${props.dropdownsLink}`}>Dropdowns</LinkItem>
          </DivDropdownContent>
        </DivDropdown>
      </nav>
    </DivWrapper>
  );
};

export default HeaderNavDesktop;
