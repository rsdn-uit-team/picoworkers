import styled from '@emotion/styled';
const InputField = styled.div`
  margin-bottom: 24px;
  label {
    color: var(--label);
    text-transform: capitalize;
    font-weight: 500;
    line-height: 1.1716666667;
  }
  input {
    display: block;
    width: 100%;
    margin: 0;
    margin-top: 8px;
    padding: 10px 11px 12px;
    outline: none;
    background-color: var(--input);
    border-radius: 2px;
    box-sizing: border-box;
    border: 1px solid transparent;
    line-height: 1.333333;
    &:focus {
      border-color: rgba(0, 0, 0, 0);
      outline: 0;
      -webkit-box-shadow: inset 0 -1px 0 0 var(--primary);
      box-shadow: inset 0 -1px 0 0 var(--primary);
    }
  }
  span {
    color: var(--danger);
    font-size: 14px;
  }
`;
export default function Input({ error, touched, ...props }) {
  return (
    <InputField>
      <label htmlFor={props.id}>{props.name}</label>
      <input {...props} placeholder="Type your response here" />
      {error && touched && <span>{error}</span>}
    </InputField>
  );
}
