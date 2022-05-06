import React, { useState } from 'react';

import Snackbar from './Snackbar';

export default {
  title: 'Components/Snackbar',
  component: Snackbar,
};

export const Default = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen((open) => !open)}>show snackbar</button>
      <Snackbar
        open={open}
        onClose={() => setOpen((open) => !open)}
        message="message"
        {...props}
      />
    </>
  );
};
