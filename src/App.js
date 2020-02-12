// Libraries/Frameworks
import React, { Component } from "react";
// import { connect } from "react-redux";
import { Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

// Components
import Dropdowns from "./pageviews/Dropdowns.js";
import Header from "./components/header/Header.js";
import Home from "./pageviews/Home.js";
import Modals from "./pageviews/Modals.js";
import Forms from "./pageviews/Forms.js";
import Footer from "./components/Footer.js";

// Globals
import { clientLinks } from "./globals/Globals.js";

//============================================ styles =============================================
const DivWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  min-height: 100%;
`;

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, 
  object, iframe, blockquote, pre,
  abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  h1 {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 3.2rem;
    vertical-align: baseline;
  }
  h2 {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 2.4rem;
    vertical-align: baseline;
  }
  h3 {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 1.872rem;
    vertical-align: baseline;
  }
  h4, p, a {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 1.6rem;
    vertical-align: baseline;
  }
  a:link {
    color: (internal value);
  }
  a:visited {
    color: (internal value);
  }
  a:link:active {
    color: (internal value);
  }
  a:visited:active {
    color: (internal value);
  }
  h5 {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 1.328rem;
    vertical-align: baseline;
  }
  h6 {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 1.072rem;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html,
  body,
  #root {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Roboto, Arial, sans-serif;
    height: 100%;
    font-size: 62.5%;
    min-height: 100%;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  img {
    width: 100%;
  }
`;

const DivContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
`;

//=========================================== component ===========================================
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hOpen: false
    };
  }

  render() {
    return (
      <DivWrapper>
        <GlobalStyle />
        <Header />
        <DivContainer>
          <Route
            exact
            path={`${clientLinks.home}`}
            render={() => <Home {...this.props} />}
          />
          <Route exact path={`${clientLinks.dropdowns}`} component={Dropdowns} />
          <Route exact path={`${clientLinks.forms}`} component={Forms} />
          <Route exact path={`${clientLinks.modals}`} component={Modals} />
        </DivContainer>
        <Footer />
      </DivWrapper>
    );
  }
}

export default App;
