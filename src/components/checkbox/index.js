import React from "react";
import styled from "styled-components";


export default class CheckBox extends React.Component {
  // Create a custom checkbox component

  render() {
    const { checkList } = this.props;

    return (
      <CheckboxCont>
        <CheckBoxInput type="checkbox" />
        <label>{checkList}</label>
      </CheckboxCont>
    );
  }
}

const CheckboxCont = styled.div`
  position: relative;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 4px;
`;
const CheckBoxInput = styled.input`
  cursor: pointer;
`;
