import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage, Form, Field } from 'formik';
import * as yup from 'yup';
import { logIn } from 'redux/auth/operations';

let schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('This field is required'),
  password: yup
    .string()
    .min(4, 'Password must be at least 4 characters long!')
    .max(16, 'Password must be less than 16 characters long!')
    .required('This field is required'),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => {
        return <div>{message}</div>;
      }}
    />
  );
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    dispatch(
      logIn({
        email,
        password,
      })
    );
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Email
          <div>
            <Field type="email" name="email" autoComplete="off" />
            <FormError name="email" />
          </div>
        </label>
        <label>
          Password
          <div>
            <Field type="password" name="password" autoComplete="off" />
            <FormError name="password" />
          </div>
        </label>
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
