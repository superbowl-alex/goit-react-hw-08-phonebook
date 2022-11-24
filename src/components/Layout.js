import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Header from './Header';
import LinearProgress from '@mui/material/LinearProgress';

const Layout = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        bgcolor: 'secondary.light',
        height: '100vh',
      }}
    >
      <Header />
      <Box sx={{ width: '100%', pt: 17 }}>
        <Suspense fallback={<LinearProgress />}>
          <Outlet />
        </Suspense>
        <ToastContainer style={{ minHeight: '70px', borderRadius: '8px' }} />
      </Box>
    </Container>
  );
};

export default Layout;
