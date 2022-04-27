import styled from '@emotion/styled';
import React, { useState } from 'react';

import Select from './Select';

export default {
  title: 'Components/Select',
  component: Select,
};

const MenuItem = styled.li({
  fontSize: 13,
  padding: '9px 18px',
  cursor: 'pointer',
  ':hover': {
    color: 'var(--primary)',
  },
});
const Selected = styled.span({
  color: 'var(--primary)',
  fontWeight: 'bold',
});
export const Default = (props) => {
  const [value, setValue] = useState('');
  const [filter, setFilter] = useState('');
  const listMenu = ['1', '2', '3', '4', '5'];
  const listFilter = listMenu.filter((item) => {
    return item.toLowerCase().indexOf(filter) > -1;
  });
  return (
    <Select
      placeholder="select country"
      value={value}
      label="Select Country"
      onSearch={(e) => {
        setFilter(e.target.value);
      }}
      {...props}
    >
      {listFilter.length === 0 ? (
        <MenuItem>Search results found</MenuItem>
      ) : (
        listFilter.map((item, index) => (
          <MenuItem
            onClick={() => {
              setValue(item);
            }}
            key={index}
          >
            {item === value ? <Selected>{item}</Selected> : item}
          </MenuItem>
        ))
      )}
    </Select>
  );
};
