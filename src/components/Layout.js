import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <Container maxWidth="xl">
      <Header />
      <Box sx={{ width: '100%', mt: 9 }}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Box>
    </Container>
  );
};

export default Layout;
