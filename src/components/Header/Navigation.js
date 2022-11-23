import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Stack direction="row" spacing={2} alignItems="center">
        <Button
          component={RouterLink}
          to="/"
          variant="contained"
          sx={{
            fontSize: 18,
            fontWeight: 500,
            bgcolor: 'primary.light',
            transition: 'transform 250ms ease-out',
            '&:hover': {
              background: 'primary.dark',
              color: '#fff',
              transform: 'scale(1.1)',
            },
          }}
        >
          Home
        </Button>
        {isLoggedIn && (
          <Button
            component={RouterLink}
            to="/contacts"
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
            Contacts
          </Button>
        )}
      </Stack>
    </nav>
  );
};

export default Navigation;
