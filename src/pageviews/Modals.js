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

const DivButtonTypes = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem;
`;

//=========================================== component ===========================================
const Modals = props => {
  return (
    <DivWrapper>
      <h1 style={{ alignSelf: "center" }}>Select Modal</h1>
      <DivButtonTypes>
        <button type="button" onClick={ev => props.setBasicModal(ev, true)}>
          Basic
        </button>
      </DivButtonTypes>
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
