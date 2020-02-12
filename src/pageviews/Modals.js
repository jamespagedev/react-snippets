import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { setBasicModal } from "../store/actions/ModalActions.js";

// Components
import BasicModal from "../components/codesnippets/Modals/Basic/BasicModal.js";

//============================================ styles =============================================
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const DivButtons = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem;
`;

const Button = styled.button`
  font-size: 1.6rem;
  font-weight: bold;
  padding: 2rem 6rem;
  border-radius: 0.6rem;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;

//=========================================== component ===========================================
const Modals = props => {
  return (
    <DivWrapper>
      <h1 style={{ alignSelf: "center" }}>Select Modal</h1>
      <DivButtons>
        <Button type="button" onClick={ev => props.setBasicModal(ev, true)}>
          Basic
        </Button>
      </DivButtons>
      <BasicModal setBasicModal={props.setBasicModal} isOpen={props.isOpen} />
    </DivWrapper>
  );
};

const mapStateToProps = state => {
  return {
    isOpen: state.modals.isBasicModalOpen,
    error: state.modals.error
  };
};

export default connect(
  mapStateToProps,
  { setBasicModal }
)(Modals);
