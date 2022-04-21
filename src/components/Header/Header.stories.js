import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

export default {
  title: 'Layouts/Header',
  component: Header,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = (props) => <Header {...props} />;
