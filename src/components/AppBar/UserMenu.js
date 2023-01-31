import { useState } from 'react';
import { Link as NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Box, IconButton, Link } from '@mui/material';
import { PersonAdd } from '@mui/icons-material';

import LogoutIcon from '@mui/icons-material/Logout';
import { logoutUser } from 'redux/auth/authOperations';
import { AddContact } from 'components/ContactForm/AddContact';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        <Link
          component={NavLink}
          to={'/contacts'}
          sx={{
            color: 'inherit',
            textDecoration: 'none',
            '&:hover': {
              color: 'text.secondary',
            },
          }}
        >
          My Contacts
        </Link>
        <Link
          sx={{
            color: 'inherit',
            textDecoration: 'none',
            cursor: 'pointer',
            display: { xs: 'none', sm: 'flex' },
            '&:hover': {
              color: 'text.secondary',
            },
          }}
          onClick={() => setIsDrawerOpen(true)}
        >
          Add Contact
        </Link>
        <IconButton
          onClick={() => setIsDrawerOpen(true)}
          sx={{
            color: 'inherit',
            display: { xs: 'flex', sm: 'none' },
          }}
        >
          <PersonAdd />
        </IconButton>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton
          onClick={() => dispatch(logoutUser())}
          sx={{
            color: 'inherit',
            '&:hover': {
              color: 'text.secondary',
            },
          }}
        >
          <LogoutIcon />
        </IconButton>
      </Box>

      <AddContact
        isDrawerOpen={isDrawerOpen}
        closeDrawer={() => setIsDrawerOpen(false)}
      />
    </Box>
  );
};
