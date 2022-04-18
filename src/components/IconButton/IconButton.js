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
  i.text-medium {
    font-size: 28px;
    padding: 20px;
  }
  i.text-small {
    font-size: 20px;
    padding: 6.8px 9px;
    line-height: 1;
  }
  &.border {
    border: 1px solid var(--borderIcon);
  }
`;
export default function IconButton({
  aria_label,
  border,
  size = 'medium',
  ...props
}) {
  return (
    <ButtonField className={border} {...props}>
      <i className={aria_label + ` text-${size}`}></i>
    </ButtonField>
  );
}
