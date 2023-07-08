import { useState } from 'react';

import { Users } from '../../types/types';
import { CARDS_PER_PAGE } from '../../config/constants';

import { Box } from '../Box/Box';
import { TweetsItem } from './TweetsItem/TweetsItem';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';

import { UsersCards } from './TweetsList.styled';

export const TweetsList = ({ users }: Users) => {
  const [page, setPage] = useState(1);
  const [usersToShow, setUsersToShow] = useState(users.slice(0, CARDS_PER_PAGE * page));

  const handleLoadMore = () => {
    setPage(page + 1);
    setUsersToShow(users.slice(0, CARDS_PER_PAGE * (page + 1)));
  };

  return (
    <Box paddingBottom="30px">
      <UsersCards>
        {usersToShow.map(({ id, user, tweets, followers, avatar }) => (
          <TweetsItem
            key={id}
            id={id}
            user={user}
            tweets={tweets}
            followers={followers}
            avatar={avatar}
          />
        ))}
      </UsersCards>
      {usersToShow.length < users.length && <LoadMoreBtn type="button" onClick={handleLoadMore} />}
    </Box>
  );
};
