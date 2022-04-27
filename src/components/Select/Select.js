import { forwardRef, useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import Input from 'components/Input/Input';

const SelectWrapper = styled.div({
  position: 'relative',
});
const SelectRoot = styled(Input)({
  cursor: 'pointer',
  color: 'transparent',
  textShadow: '0 0 0 var(--secondary)',
  fontWeight: 500,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  padding: '10px 40px 12px 11px',
});
const IconWrapper = styled.span({
  position: 'absolute',
  top: 26,
  right: 0,
  width: 43,
  height: 43,
  cursor: 'pointer',
  color: 'var(--secondary)',
});
const IconSelect = styled(({ rotate, ...props }) => (
  <Icon.ChevronDown {...props} />
))(
  {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
  ({ rotate }) => ({
    ...(rotate && { transform: 'translate(-50%,-50%) rotate(180deg)' }),
  })
);
const OptionRoot = styled.div(
  {
    position: 'absolute',
    top: '100%',
    zIndex: 1000,
    left: 0,
    width: 192,
    boxShadow: '0 8px 20px 0 var(--shadowOption)',
    backgroundColor: 'var(--white)',
  },
  ({ openOption }) => ({
    display: openOption ? 'block' : 'none',
  })
);
const Search = styled(Input)({
  padding: '5px 10px',
  margin: '10px 10px 5px',
});
const ListRoot = styled.ul({
  listStyleType: 'none',
  padding: 0,
  margin: 0,
  maxHeight: 200,
  overflow: 'auto',
});

const Select = forwardRef(
  (
    {
      value,
      label,
      search,
      error,
      touched,
      color,
      onSearch,
      children,
      ...props
    },
    ref
  ) => {
    const [openOption, setOpenOption] = useState(false);
    return (
      <SelectWrapper ref={ref}>
        <SelectRoot
          value={value}
          label={label}
          error={error}
          touched={touched}
          onClick={() => {
            setOpenOption(!openOption);
          }}
          readOnly
          focused
          {...props}
        />
        <IconWrapper
          onClick={() => {
            setOpenOption(!openOption);
          }}
        >
          <IconSelect rotate={openOption}>
            <Icon.ChevronDown />
          </IconSelect>
        </IconWrapper>
        <OptionRoot openOption={openOption}>
          {search && (
            <Search
              variant="outlined"
              type="text"
              onChange={(e) => onSearch(e)}
            />
          )}
          <ListRoot
            onClick={() => {
              setOpenOption(!openOption);
            }}
          >
            {children}
          </ListRoot>
        </OptionRoot>
      </SelectWrapper>
    );
  }
);
Select.propTypes = {
  search: PropTypes.bool,
  label: PropTypes.string,
  color: PropTypes.oneOf(['default', 'primary', 'success', 'error']),
};
Select.defaultProps = {
  search: true,
  label: 'Label',
};
export default Select;
