import React from "react";
import styled from "styled-components";

//============================================ styles =============================================
const DivBackground = styled.div`
  position: fixed;
  top: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: ${props => (props.isOpen === "true" ? "block" : "none")};
`;

const DivContainer = styled.div`
  display: flex;
  position: relative;
  top: 5rem;
  width: 80%;
  height: 80%;
  margin: auto;
  background-color: white;
  /* styled-components handles the different browsers for you
  -webkit-touch-callout: none;
  -webkit-user-select: none; Webkit
  -moz-user-select: none; Firefox
  -ms-user-select: none; IE 10 
  -o-user-select: none; Opera  */
  user-select: none;
`;

//=========================================== component ===========================================
const BasicModal = props => {
  return (
    <DivBackground
      isOpen={props.isOpen.toString()}
      onClick={ev => props.setBasicModal(ev, false)}
    >
      <DivContainer onClick={ev => ev.stopPropagation()}>
        <h1 style={{ alignSelf: "center", margin: "auto" }}>
          This is the Basic Modal
        </h1>
      </DivContainer>
    </DivBackground>
  );
};

export default BasicModal;
