import { Close } from '@mui/icons-material';
import { func, bool } from 'prop-types';
import { Drawer, IconButton } from '@mui/material';

import { ContactForm } from './ContactForm';

export const AddContact = ({ isDrawerOpen, closeDrawer }) => {
  return (
    <Drawer anchor="left" open={isDrawerOpen} onClose={closeDrawer}>
      <IconButton
        onClick={closeDrawer}
        sx={{
          position: 'absolute',
          top: '10px',
          right: '10px',
        }}
      >
        <Close />
      </IconButton>
      <ContactForm />
    </Drawer>
  );
};

AddContact.propTypes = {
  isDrawerOpen: bool.isRequired,
  closeDrawer: func.isRequired,
};
