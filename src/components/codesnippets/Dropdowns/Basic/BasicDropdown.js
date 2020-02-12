import React from 'react';
import styled from 'styled-components';

//============================================ styles =============================================
const DivDropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 24.7rem;
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

const SpanDropdownTitle = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  padding: 2rem 6rem;
  border-radius: 0.6rem;
  border: 1px solid black;

  &:hover {
    cursor: pointer;
  }
`;

const ItemDropdown = styled.p`
  padding: 1rem;

  &:hover {
    cursor: pointer;
    background: lightgray;
  }
`;

//=========================================== component ===========================================
const BasicDropdown = props => {
  return (
    <DivDropdown>
      <SpanDropdownTitle>Basic&nbsp;Dropdown</SpanDropdownTitle>
      <DivDropdownContent>
        <ItemDropdown>Item 1</ItemDropdown>
        <ItemDropdown>Item 2</ItemDropdown>
        <ItemDropdown>Item 3</ItemDropdown>
      </DivDropdownContent>
    </DivDropdown>
  );
};

export default BasicDropdown;