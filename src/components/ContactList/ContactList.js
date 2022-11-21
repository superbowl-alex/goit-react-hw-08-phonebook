import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ContactItem from '../ContactItem';
import Notification from '../Notification';
import { useSelector } from 'react-redux';
import {
  selectVisibleContacts,
  selectPendingStatus,
} from 'redux/contacts/selectors';
// import { List, WrapList, ListTitle, Item } from './ContactList.styled';
import Loader from 'components/Loader';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const pending = useSelector(selectPendingStatus);

  return (
    <Box>
      <Typography variant="h3">Contacts</Typography>
      {pending ? (
        <Loader />
      ) : contacts.length > 0 ? (
        <ul>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              <ContactItem id={id} name={name} number={number} />
            </li>
          ))}
        </ul>
      ) : (
        <Notification message="There is no contact in Phonebook" />
      )}
    </Box>
  );
};

export default ContactList;
