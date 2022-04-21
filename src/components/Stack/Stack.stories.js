import React from 'react';

import Stack from './Stack';

export default {
  title: 'Components/Stack',
  component: Stack,
};

export const Default = (props) => (
  <Stack {...props}>
    <div>1</div>
    <div>2</div>
  </Stack>
);