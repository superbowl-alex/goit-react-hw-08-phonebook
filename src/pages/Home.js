import { Helmet } from 'react-helmet';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Box
        sx={{
          width: 800,
          backgroundColor: 'primary.main',
          mx: 'auto',
          borderRadius: 2,
          // border: 3,
          alignItems: 'center',
          p: 2,
          borderColor: 'primary.dark',
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h2"
          component="h4"
          sx={{
            textAlign: 'center',
            color: 'primary.contrastText',
          }}
        >
          To access your phonebook,<br></br> please login or register
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
