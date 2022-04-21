import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const StackRoot = styled.div(
  {
    display: 'flex',
  },
  ({ direction, justifyContent, alignItems, spacing }) => ({
    flexDirection: direction,
    justifyContent: justifyContent,
    alignItems: alignItems,
    ...(direction === 'row' && {
      '> :not(style) + :not(style)': {
        marginLeft: spacing,
      },
    }),
    ...(direction === 'column' && {
      '> :not(style) + :not(style)': {
        marginTop: spacing,
      },
    }),
  })
);

const Stack = forwardRef(({ children, direction, ...props }, ref) => {
  return (
    <StackRoot ref={ref} direction={direction} {...props}>
      {children}
    </StackRoot>
  );
});

Stack.propTypes = {
  direction: PropTypes.oneOf([
    'row',
    'column',
    'row-reverse',
    'column-reverse',
    'initial',
    'inherit',
  ]),
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
    'initial',
    'inherit',
  ]),
  alignItems: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
    'initial',
    'inherit',
  ]),
  spacing: PropTypes.number,
};

Stack.defaultProps = {
  direction: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  spacing: 0,
};

export default Stack;
