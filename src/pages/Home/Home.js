import { Helmet } from 'react-helmet';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Box sx={{ width: 300, height: 300, backgroundColor: 'primary.dark' }}>
        <Typography variant="h3" component="h4">
          To access your phonebook, please login or register
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
