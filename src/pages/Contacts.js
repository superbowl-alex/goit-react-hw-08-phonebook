import { Helmet } from 'react-helmet';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Typography variant="h3">Phonebook</Typography>
      <ContactForm />
      <Filter />
      <ContactList />
    </main>
  );
};

export default Contacts;
