import { startTransition } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Box } from '../Box/Box';

export const AppBar = () => {
  return (
    <Box>
      <div>AppBar</div>
      <Outlet />
    </Box>
  );
};
