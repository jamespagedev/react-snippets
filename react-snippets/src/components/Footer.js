import React from "react";
import styled from "styled-components";

//============================================ styles =============================================
const FooterWrapper = styled.footer`
  display: flex;
  width: 100%;
  background-color: black;
  justify-content: center;
  padding: 2rem 1rem;
  /* styled-components handles the different browsers for you
  -webkit-touch-callout: none;
  -webkit-user-select: none; Webkit
  -moz-user-select: none; Firefox
  -ms-user-select: none; IE 10 
  -o-user-select: none; Opera  */
  user-select: none;

  p {
    color: white;
    align-self: center;
  }
`;

//=========================================== component ===========================================
const Footer = () => {
  return (
    <FooterWrapper>
      <p>This is the footer</p>
    </FooterWrapper>
  );
};

export default Footer;
