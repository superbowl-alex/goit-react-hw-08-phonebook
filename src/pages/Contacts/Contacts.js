import { Helmet } from 'react-helmet';
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
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <Filter />
      </div>
      <ContactList />
    </main>
  );
};

export default Contacts;
