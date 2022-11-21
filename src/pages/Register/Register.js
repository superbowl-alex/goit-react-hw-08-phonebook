import { Helmet } from 'react-helmet';
import Box from '@mui/material/Box';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const Register = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </Box>
  );
};

export default Register;
