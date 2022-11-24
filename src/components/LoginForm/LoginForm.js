import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { logIn } from 'redux/auth/operations';
import { toastOptions } from 'utils/toastOptions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

let schema = yup.object().shape({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(7, 'Password should be of minimum 7 characters length')
    .required('Password is required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    const { error } = await dispatch(
      logIn({
        email: values.email.trim(),
        password: values.password.trim(),
      })
    );
    if (!error) {
      resetForm();
      toast.success(`You have successfully Log In`, toastOptions);
      return;
    }
    toast.error(
      `An error has occurred, please check the information you entered.`,
      toastOptions
    );
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        width: 500,
        backgroundColor: 'primary.main',
        mx: 'auto',
        borderRadius: 2,
        p: 2,
        boxShadow: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > :not(style)': { m: 1.5 },
      }}
    >
      <TextField
        id="email"
        color="accent"
        name="email"
        label="Email"
        autoComplete="off"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        sx={{
          width: 400,
          boxShadow: 2,
          borderRadius: 1,
          backgroundColor: 'primary.light',
        }}
      />
      <TextField
        id="password"
        color="accent"
        name="password"
        label="Password"
        type="password"
        autoComplete="off"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        sx={{
          width: 400,
          boxShadow: 2,
          borderRadius: 1,
          backgroundColor: 'primary.light',
        }}
      />
      <Button color="primary" variant="contained" type="submit">
        Log in
      </Button>
    </Box>
  );
};

export default LoginForm;
