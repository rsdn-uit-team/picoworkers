import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Link from './Link';

export default {
  title: 'Components/Link',
  component: Link,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = (props) => (
  <Link to="/" {...props}>
    Primary
  </Link>
);
