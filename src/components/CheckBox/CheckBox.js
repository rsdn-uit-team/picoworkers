import React from 'react';
import styled from '@emotion/styled';
const CheckBoxField = styled.div`
  display: flex;
  align-items: center;
  input {
    width: 9px;
    height: 9px;
    box-sizing: content-box;
    -moz-appearance: none;
    -webkit-appearance: none;
    -o-appearance: none;
    border: 1px solid var(--borderCheckbox);
    margin: 0;
    padding: 1px;
    background-clip: content-box;
    border-radius: 2px;
    &:hover {
      cursor: pointer;
    }
    &:checked {
      background-color: var(--success);
      border: 1px solid var(--success);
      color: var(--white);
    }
    label {
      margin-left: 8px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  label {
    margin-left: 8px;
    &:hover {
      cursor: pointer;
    }
  }
`;
export default function CheckBox({ label, ...props }) {
  return (
    <CheckBoxField>
      <input type="checkbox" {...props} />
      <label htmlFor={props.id}>{label}</label>
    </CheckBoxField>
  );
}
