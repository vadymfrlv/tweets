import { startTransition } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Box } from '../Box/Box';

import { Header } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Box>
      <Header>AppBar</Header>
      <Outlet />
    </Box>
  );
};
