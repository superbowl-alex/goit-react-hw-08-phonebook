import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const AuthNav = () => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Button component={RouterLink} to="/register" variant="contained">
        Register
      </Button>
      <Button component={RouterLink} to="/login" variant="contained">
        Log In
      </Button>
    </Stack>
  );
};

export default AuthNav;
