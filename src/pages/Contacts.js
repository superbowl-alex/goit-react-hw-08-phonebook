import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
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
      <Stack direction="row" spacing={5} sx={{ width: 1080, mx: 'auto' }}>
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
          <Box
            sx={{
              mb: 2,
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
              Phonebook
            </Typography>
            <ContactForm />
          </Box>
          <Box
            sx={{
              width: 400,
              backgroundColor: 'primary.main',
              mx: 'auto',
              borderRadius: 2,
              p: 2,
              boxShadow: 5,
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: 'primary.contrastText',
                textAlign: 'center',
                mb: 1,
              }}
            >
              Find contact
            </Typography>
            <Filter />
          </Box>
        </Box>
        <ContactList />
      </Stack>
    </main>
  );
};

export default Contacts;
