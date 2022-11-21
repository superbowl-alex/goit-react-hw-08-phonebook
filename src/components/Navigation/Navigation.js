import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useAuth } from 'hooks';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Stack direction="row" spacing={2} alignItems="center">
        <Button href="/goit-react-hw-08-phonebook" variant="contained">
          Home
        </Button>
        {isLoggedIn && (
          <Button
            href="/goit-react-hw-08-phonebook/contacts"
            variant="contained"
          >
            Contacts
          </Button>
        )}
      </Stack>
    </nav>
  );
};

export default Navigation;
