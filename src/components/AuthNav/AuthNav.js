import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const AuthNav = () => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Button href="/goit-react-hw-08-phonebook/register" variant="contained">
        Register
      </Button>
      <Button href="/goit-react-hw-08-phonebook/login" variant="contained">
        Log In
      </Button>
    </Stack>
  );
};

export default AuthNav;
