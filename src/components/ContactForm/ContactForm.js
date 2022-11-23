import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { toastOptions } from 'utils/toastOptions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

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

  const handleSubmit = async (values, { resetForm }) => {
    const findContactByName = (array, newName) => {
      return array.find(({ name }) => name.toLowerCase() === newName);
    };

    const { name } = values;
    const normalizedName = name.toLowerCase().trim();

    if (findContactByName(contacts, normalizedName)) {
      toast.error(`${name} is already in contacts`, toastOptions);
      return;
    }
    const { error } = await dispatch(addContact(values));
    if (!error) {
      resetForm();
      toast.success(`New contact has been successfully added`, toastOptions);
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
        width: 400,
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
        id="name"
        color="accent"
        name="name"
        label="Name"
        type="text"
        autoComplete="off"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        sx={{
          width: 300,
          boxShadow: 2,
          borderRadius: 1,
          backgroundColor: 'primary.light',
        }}
      />
      <TextField
        id="number"
        color="accent"
        name="number"
        label="Number"
        type="tel"
        autoComplete="off"
        value={formik.values.number}
        onChange={formik.handleChange}
        error={formik.touched.number && Boolean(formik.errors.number)}
        helperText={formik.touched.number && formik.errors.number}
        sx={{
          width: 300,
          boxShadow: 2,
          borderRadius: 1,
          backgroundColor: 'primary.light',
        }}
      />
      <Button
        color="primary"
        variant="contained"
        type="submit"
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
        Add contact
      </Button>
    </Box>
  );
};

export default ContactForm;
