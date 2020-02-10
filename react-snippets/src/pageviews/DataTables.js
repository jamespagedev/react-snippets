import React from "react";
import styled from "styled-components";

//============================================ styles =============================================
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

//=========================================== component ===========================================
const DataTables = props => {
  return (
    <DivWrapper>
      <h1>This is the DataTables page</h1>
    </DivWrapper>
  );
};

export default DataTables;
