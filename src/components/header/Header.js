import React, { Component } from "react";
import styled from "styled-components";

// Components
import Hamburger from "./Hamburger.js";
import HeaderNavDesktop from "./HeaderNavDesktop.js";
import HeaderNavMobile from "./HeaderNavMobile.js";

// Globals
import { clientLinks, rHeights, colors } from "../../globals/Globals.js";

//============================================ styles =============================================
const DivFixedPlaceHolder = styled.div`
  display: block;
  width: 100%;
  height: ${rHeights.headerHeight};
  /* styled-components handles the different browsers for you
  -webkit-touch-callout: none;
  -webkit-user-select: none; Webkit
  -moz-user-select: none; Firefox
  -ms-user-select: none; IE 10 
  -o-user-select: none; Opera  */
  user-select: none;
`;

const DivHeader = styled.div`
  display: flex;
  position: fixed;
  z-index: 4;
  width: 100%;
  height: ${rHeights.headerHeight};
  background-color: ${colors.grayChateau};
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  padding: 0 1rem;
`;

const H1Logo = styled.h1`
  color: white;
`;

//=========================================== component ===========================================
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburgerOpen: false
    };
  }

  setHamburgerMenu = (ev, status) => {
    ev.preventDefault();
    this.setState({
      hamburgerOpen: status
    });
  };

  closeHamburgerMenu = ev => {
    ev.preventDefault();
    this.setState({
      hamburgerOpen: false
    });
  };

  render() {
    return (
      <DivFixedPlaceHolder>
        <DivHeader>
          <H1Logo>My&nbsp;React&nbsp;Snippets</H1Logo>
          <HeaderNavDesktop
            homeLink={clientLinks.home}
            formsLink={clientLinks.forms}
            modalsLink={clientLinks.modals}
          />
          <Hamburger
            hamburgerOpen={this.state.hamburgerOpen}
            setHamburgerMenu={this.setHamburgerMenu}
          />
        </DivHeader>
        <HeaderNavMobile
          hamburgerOpen={this.state.hamburgerOpen}
          closeHamburgerMenu={this.closeHamburgerMenu}
          homeLink={clientLinks.home}
          formsLink={clientLinks.forms}
          modalsLink={clientLinks.modals}
        />
      </DivFixedPlaceHolder>
    );
  }
}

export default Header;
