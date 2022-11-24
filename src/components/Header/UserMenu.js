import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const firstLetter = user.name[0].toUpperCase();

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Avatar sx={{ bgcolor: 'primary.dark' }}>{firstLetter}</Avatar>
      <Typography variant="h4" component="p" align="center" sx={{ mr: 2 }}>
        Welcome, {user.name}
      </Typography>
      <Button
        variant="contained"
        onClick={() => dispatch(logOut())}
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
        Log Out
      </Button>
    </Stack>
  );
};

export default UserMenu;
