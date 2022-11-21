import React from 'react';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
// import {
//   FormAddContacts,
//   Label,
//   Input,
//   Thumb,
//   ErrorElement,
//   ButtonForm,
// } from './ContactForm.styled';

let schema = yup.object().shape({
  name: yup
    .string('Enter contact name')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces without spaces at the beginning and end of the name'
    )
    .required('Name is required'),
  number: yup
    .string('Enter phone number')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Phone number is required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const findContactByName = (array, newName) => {
      return array.find(({ name }) => name.toLowerCase() === newName);
    };

    const { name } = values;
    const normalizedName = name.toLowerCase().trim();

    if (findContactByName(contacts, normalizedName)) {
      <Alert onClose={() => {}} severity="error">
        <AlertTitle>Error</AlertTitle>
        `${name} is already in contacts`
      </Alert>;
      return;
    }
    dispatch(addContact(values));
    resetForm();
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
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
        type="text"
        autoComplete="off"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        id="number"
        name="number"
        label="Number"
        type="tel"
        autoComplete="off"
        value={formik.values.number}
        onChange={formik.handleChange}
        error={formik.touched.number && Boolean(formik.errors.number)}
        helperText={formik.touched.number && formik.errors.number}
      />
      <Button color="primary" variant="contained" type="submit">
        Add contact
      </Button>
    </Box>
  );
};

export default ContactForm;
