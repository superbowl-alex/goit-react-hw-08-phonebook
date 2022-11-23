import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const AuthNav = () => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Button
        component={RouterLink}
        to="/register"
        variant="contained"
        sx={{
          bgcolor: 'primary.light',
          fontSize: 18,
          fontWeight: 500,
          transition: 'transform 250ms ease-out',
          '&:hover': {
            background: 'primary.dark',
            color: '#fff',
            transform: 'scale(1.1)',
          },
        }}
      >
        Register
      </Button>
      <Button
        component={RouterLink}
        to="/login"
        variant="contained"
        sx={{
          bgcolor: 'primary.light',
          fontSize: 18,
          fontWeight: 500,
          transition: 'transform 250ms ease-out',
          '&:hover': {
            background: 'primary.dark',
            color: '#fff',
            transform: 'scale(1.1)',
          },
        }}
      >
        Log In
      </Button>
    </Stack>
  );
};

export default AuthNav;
