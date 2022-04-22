import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Footer from './Footer';

export default {
  title: 'Layouts/Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = (props) => <Footer {...props} />;
