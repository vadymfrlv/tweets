import { useState } from 'react';

import { CARDS_PER_PAGE } from '../../config/constants';

import { Box } from '../Box/Box';
import { TweetsItem } from './TweetsItem/TweetsItem';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';

import { UsersCards } from './TweetsList.styled';

export const TweetsList = ({ users }) => {
  const [page, setPage] = useState(1);
  const [usersToShow, setUsersToShow] = useState(users.slice(0, CARDS_PER_PAGE * page));

  const handleLoadMore = () => {
    setPage(page + 1);
    setUsersToShow(users.slice(0, CARDS_PER_PAGE * (page + 1)));
  };

  return (
    <Box paddingBottom="30px">
      <UsersCards>
        {usersToShow.map(user => (
          <TweetsItem
            key={user.id}
            id={user.id}
            user={user.user}
            tweets={user.tweets}
            followers={user.followers}
            avatar={user.avatar}
          />
        ))}
      </UsersCards>
      {usersToShow.length < users.length && <LoadMoreBtn type="button" onClick={handleLoadMore} />}
    </Box>
  );
};
