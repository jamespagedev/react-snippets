import React from "react";
import styled from "styled-components";

// Components
import BasicDropdown from "../components/codesnippets/Dropdowns/Basic/BasicDropdown.js";

//============================================ styles =============================================
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const DivContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem;
`;

//=========================================== component ===========================================
const Dropdowns = props => {
  return (
    <DivWrapper>
      <h1 style={{ alignSelf: "center" }}>Dropdowns</h1>
      <DivContainer>
        <BasicDropdown />
      </DivContainer>
    </DivWrapper>
  );
};

export default Dropdowns;
