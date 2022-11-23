import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { register } from 'redux/auth/operations';
import { toastOptions } from 'utils/toastOptions';
import { toast } from 'react-toastify';

let schema = yup.object().shape({
  name: yup
    .string('Enter your email')
    .min(3, 'Name must be at least 3 characters long!')
    .max(32, 'Name must be less than 32 characters long')
    .required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(7, 'Password should be of minimum 7 characters length')
    .required('Password is required'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    const { error } = await dispatch(
      register({
        name: values.name.trim(),
        email: values.email.trim(),
        password: values.password.trim(),
      })
    );
    if (!error) {
      resetForm();
      toast.success(`You have successfully registered`, toastOptions);
      return;
    }
    toast.error(
      `An error has occurred, please check the information you entered.`,
      toastOptions
    );
  };

  const formik = useFormik({
    initialValues: {
      name: '',
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 400,
        '& > :not(style)': { m: 1.5 },
      }}
    >
      <TextField
        id="name"
        name="name"
        label="Name"
        autoComplete="off"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        id="email"
        name="email"
        label="Email"
        autoComplete="off"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        id="password"
        name="password"
        label="Password"
        type="password"
        autoComplete="off"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button color="primary" variant="contained" type="submit">
        Log in
      </Button>
    </Box>
  );
};

export default RegisterForm;
