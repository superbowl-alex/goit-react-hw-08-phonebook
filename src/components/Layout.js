import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Suspense } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{ bgcolor: 'secondary.light', height: '100vh' }}
    >
      <Header />
      <Box sx={{ width: '100%', mt: 8, pt: 15 }}>
        <Suspense fallback={<LinearProgress />}>
          <Outlet />
        </Suspense>
        <ToastContainer style={{ minHeight: '70px', borderRadius: '8px' }} />
      </Box>
    </Container>
  );
};

export default Layout;
