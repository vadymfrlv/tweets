import { startTransition } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { Box } from '../Box/Box';

import { Header, Title, SubTitle, GoToTweetsBtn, GoToHomeBtn, Arrow } from './AppBar.styled';

export const AppBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoToTweets = (): void => {
    startTransition(() => {
      navigate('tweets');
    });
  };
  const handleGoToHome = (): void => {
    startTransition(() => {
      navigate('/');
    });
  };

  return (
    <Box>
      <Header>
        {location.pathname === '/' && (
          <GoToTweetsBtn type="button" onClick={handleGoToTweets}>
            Go to tweets
          </GoToTweetsBtn>
        )}

        {location.pathname === '/tweets' && (
          <Box display="flex" justifyContent="center">
            <Title>Thrilled you're here</Title>
            <SubTitle>Tweets are welcoming</SubTitle>
          </Box>
        )}
      </Header>

      {location.pathname === '/tweets' && (
        <GoToHomeBtn type="button" onClick={handleGoToHome}>
          <Arrow>&#x27A4;</Arrow> Go home
        </GoToHomeBtn>
      )}
      <Outlet />
    </Box>
  );
};
