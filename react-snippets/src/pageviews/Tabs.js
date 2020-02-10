import React from "react";
import styled from "styled-components";

//============================================ styles =============================================
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

//=========================================== component ===========================================
const Tabs = props => {
  return (
    <DivWrapper>
      <h1>This is the Tabs page</h1>
    </DivWrapper>
  );
};

export default Tabs;
