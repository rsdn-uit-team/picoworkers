import React from 'react';

import CheckBox from './CheckBox';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
};

export const Default = (props) => (
  <CheckBox id="checkbox" label="default" {...props} />
);
