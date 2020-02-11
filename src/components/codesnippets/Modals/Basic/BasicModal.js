import React from "react";
import styled from "styled-components";

// Globals
import { rHeights, zIndexes } from "../../../../globals/Globals.js";

// Variables
const modalBackgroundColor = "white";

//============================================ styles =============================================
const DivBackground = styled.div`
  position: fixed;
  top: 0;
  z-index: ${zIndexes.modal};
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: ${props => (props.isOpen === "true" ? "block" : "none")};
`;

const DivContainer = styled.div`
  display: flex;
  position: relative;
  top: ${rHeights.modalFullSizeTopSpace};
  width: 80%;
  height: 80%;
  margin: auto;
  background-color: ${modalBackgroundColor};
  /* styled-components handles the different browsers for you
  -webkit-touch-callout: none;
  -webkit-user-select: none; Webkit
  -moz-user-select: none; Firefox
  -ms-user-select: none; IE 10 
  -o-user-select: none; Opera  */
  user-select: none;
`;

const CloseCircleX = styled.i`
  position: absolute;
  top: -2.5rem;
  right: -2.5rem;
  z-index: ${zIndexes.modalClose};
  font-size: 5rem;
  background-color: black;
  color: white;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }
`;

//=========================================== component ===========================================
const BasicModal = props => {
  return (
    <DivBackground
      isOpen={props.isOpen.toString()}
      onClick={ev => props.setBasicModal(ev, false)}
    >
      <DivContainer onClick={ev => ev.stopPropagation()}>
        <CloseCircleX className="far fa-times-circle" onClick={ev => props.setBasicModal(ev, false)}></CloseCircleX>
        <h1 style={{ alignSelf: "center", margin: "auto" }}>
          This is the Basic Modal
        </h1>
      </DivContainer>
    </DivBackground>
  );
};

export default BasicModal;
