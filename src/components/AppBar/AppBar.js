import { useSelector } from 'react-redux';
import { AppBar, Toolbar } from '@mui/material';
import { AuthNav } from './Auth';
import { UserMenu } from './UserMenu';

export const NavBar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <AppBar
      position="static"
      sx={{
        maxWidth: 'xl',
      }}
    >
      <Toolbar
        sx={{
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};
