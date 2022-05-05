import React, { useState } from 'react';

import Drawer from './Drawer';

export default {
  title: 'Components/Drawer',
  component: Drawer,
};

export const Default = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setOpenDrawer((open) => !open);
        }}
      >
        Show Drawer
      </button>
      <Drawer
        open={openDrawer}
        onClose={(e) => {
          setOpenDrawer((open) => !open);
        }}
        {...props}
      >
        Drawer drawer
      </Drawer>
    </>
  );
};
