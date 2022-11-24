import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectVisibleContacts,
  selectPendingStatus,
} from 'redux/contacts/selectors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ContactItem from '../ContactItem';
import Notification from './Notification';
import Loader from 'components/Loader';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const pending = useSelector(selectPendingStatus);

  return (
    <Box
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
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: 'primary.contrastText',
          textAlign: 'center',
          mb: 2,
        }}
      >
        Contacts
      </Typography>
      {pending && (
        <Box
          sx={{
            mb: 4,
          }}
        >
          <Loader />
        </Box>
      )}
      {contacts.length > 0 ? (
        <Box
          component="ul"
          sx={{
            listStyle: 'none',
            m: 0,
            '& > :not(style)': { mb: 1.5 },
          }}
        >
          {contacts.map(({ id, name, number }) => (
            <Box component="li" key={id}>
              <ContactItem id={id} name={name} number={number} />
            </Box>
          ))}
        </Box>
      ) : (
        <Notification message="There is no contact in Phonebook" />
      )}
    </Box>
  );
};

export default ContactList;
