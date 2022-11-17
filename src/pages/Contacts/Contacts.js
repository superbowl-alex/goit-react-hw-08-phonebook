import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';

const Contacts = () => {
  return (
    <main>
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
