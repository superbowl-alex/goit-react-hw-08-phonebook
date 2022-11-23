import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import ContactItem from '../ContactItem';
import Notification from './Notification';
import { useSelector } from 'react-redux';
import {
  selectVisibleContacts,
  selectPendingStatus,
} from 'redux/contacts/selectors';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const pending = useSelector(selectPendingStatus);

  return (
    <Box>
      <Typography variant="h3">Contacts</Typography>
      {pending ? (
        <Skeleton variant="rectangular" width={210} height={118} />
      ) : contacts.length > 0 ? (
        <Box component="ul">
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
