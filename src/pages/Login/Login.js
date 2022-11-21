import { Helmet } from 'react-helmet';
import Box from '@mui/material/Box';
import LoginForm from '../../components/LoginForm';

const Login = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </Box>
  );
};

export default Login;
