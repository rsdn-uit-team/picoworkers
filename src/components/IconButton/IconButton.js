import React from 'react';
import styled from '@emotion/styled';
const ButtonField = styled.button`
  color: var(--icon);
  border: 1px solid transparent;
  cursor: pointer;
  background-color: transparent;
  padding: 0;
  &:hover {
    color: var(--primary);
  }
  ${(props) =>
    props.size === 'medium'
      ? 'font-size: 28px;padding: 20px;'
      : props.size === 'small'
      ? 'font-size: 20px;padding: 6.8px 9px;line-height: 1;'
      : ''}
  ${(props) =>
    props.border
      ? 'border: 1px solid var(--borderIcon);&:hover{border:1px solid var(--primary);}'
      : ''}
`;
export default function IconButton({
  aria_label,
  border,
  size = 'medium',
  ...props
}) {
  return (
    <ButtonField border={border} size={size} {...props}>
      <i className={aria_label}></i>
    </ButtonField>
  );
}
