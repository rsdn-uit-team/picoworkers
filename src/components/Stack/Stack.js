import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const StackRoot = styled.div(
  {
    display: 'flex',
  },
  ({ direction, justifyContent, alignItems, spacing }) => ({
    justifyContent: justifyContent,
    alignItems: alignItems,
    ...(typeof direction === 'string' && {
      flexDirection: direction,
    }),
    ...(typeof direction === 'object' && {
      ...(direction?.md && {
        flexDirection: direction.md,
      }),
      ...(direction?.xs && {
        '@media (max-width: 992px)': {
          flexDirection: direction.xs,
        },
      }),
    }),
    ...(typeof spacing === 'number' && {
      ...(typeof direction === 'string' && {
        ...(direction === 'row' && {
          '> :not(style) + :not(style)': {
            marginLeft: spacing,
            marginTop: 0,
          },
        }),
        ...(direction === 'column' && {
          '> :not(style) + :not(style)': {
            marginLeft: 0,
            marginTop: spacing,
          },
        }),
      }),
      ...(typeof direction === 'object' && {
        ...(direction?.md === 'row' && {
          flexDirection: direction.md,
          '> :not(style) + :not(style)': {
            marginLeft: spacing,
            marginTop: 0,
          },
        }),
        ...(direction?.md === 'column' && {
          flexDirection: direction.md,
          '> :not(style) + :not(style)': {
            marginLeft: 0,
            marginTop: spacing,
          },
        }),
        ...(direction?.xs === 'row' && {
          '@media screen and (max-width: 992px)': {
            flexDirection: direction.xs,
            '> :not(style) + :not(style)': {
              marginLeft: spacing,
              marginTop: 0,
            },
          },
        }),
        ...(direction?.xs === 'column' && {
          '@media screen and (max-width: 992px)': {
            flexDirection: direction.xs,
            '> :not(style) + :not(style)': {
              marginLeft: 0,
              marginTop: spacing,
            },
          },
        }),
      }),
    }),
    ...(typeof spacing === 'object' && {
      ...(typeof direction === 'string' && {
        ...(direction === 'row' && {
          '> :not(style) + :not(style)': {
            marginLeft: spacing.md,
            marginTop: 0,
          },
          '@media screen and (max-width: 992px)': {
            '> :not(style) + :not(style)': {
              marginLeft: spacing.xs,
              marginTop: 0,
            },
          },
        }),
        ...(direction === 'column' && {
          '> :not(style) + :not(style)': {
            marginLeft: 0,
            marginTop: spacing.md,
          },
          '@media screen and (max-width: 992px)': {
            '> :not(style) + :not(style)': {
              marginLeft: 0,
              marginTop: spacing.xs,
            },
          },
        }),
      }),
      ...(typeof direction === 'object' && {
        ...(direction?.md === 'row' && {
          flexDirection: direction.md,
          '> :not(style) + :not(style)': {
            marginLeft: spacing.md,
            marginTop: 0,
          },
        }),
        ...(direction?.md === 'column' && {
          flexDirection: direction.md,
          '> :not(style) + :not(style)': {
            marginLeft: 0,
            marginTop: spacing.md,
          },
        }),
        ...(direction?.xs === 'row' && {
          '@media screen and (max-width: 992px)': {
            flexDirection: direction.xs,
            '> :not(style) + :not(style)': {
              marginLeft: spacing.xs,
              marginTop: 0,
            },
          },
        }),
        ...(direction?.xs === 'column' && {
          '@media screen and (max-width: 992px)': {
            flexDirection: direction.xs,
            '> :not(style) + :not(style)': {
              marginLeft: 0,
              marginTop: spacing.xs,
            },
          },
        }),
      }),
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
  direction: PropTypes.oneOfType([
    PropTypes.oneOf([
      'row',
      'column',
      'row-reverse',
      'column-reverse',
      'initial',
      'inherit',
    ]),
    PropTypes.shape({
      md: PropTypes.oneOf([
        'row',
        'column',
        'row-reverse',
        'column-reverse',
        'initial',
        'inherit',
      ]),
      xs: PropTypes.oneOf([
        'row',
        'column',
        'row-reverse',
        'column-reverse',
        'initial',
        'inherit',
      ]),
    }),
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
  spacing: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      md: PropTypes.number,
      xs: PropTypes.number,
    }),
  ]),
};

Stack.defaultProps = {
  direction: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  spacing: 0,
};

export default Stack;
