import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage, Form, Field } from 'formik';
import * as yup from 'yup';
import { register } from 'redux/auth/operations';

let schema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name must be at least 3 characters long!')
    .max(16, 'Name must be less than 16 characters long')
    .required('This field is required'),
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

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { name, email, password } = values;
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Name
          <div>
            <Field type="text" name="name" autoComplete="off" />
            <FormError name="name" />
          </div>
        </label>
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
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
