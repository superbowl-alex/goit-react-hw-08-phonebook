import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography variant="h4" component="p" align="center" sx={{ mr: 2 }}>
        Welcome, {user.name}
      </Typography>
      <Button variant="contained" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Stack>
  );
};

export default UserMenu;
