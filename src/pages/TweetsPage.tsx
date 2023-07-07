import { useState, useEffect } from 'react';

import { TweetsList } from '../components/Tweets/TweetsList';
import { fetchData } from '../services/tweets-api';
import { TweetsSkeleton } from '../components/Tweets/TweetsSkeleton/TweetsSkeleton';
import { TweetsSkeletonTheme } from '../components/Tweets/TweetsSkeleton/TweetsSkeletonTheme';

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await fetchData();
      setUsers(data);
      setIsLoading(false);
    };
    fetchUsers();
  }, []);

  return (
    <TweetsSkeletonTheme>
      {isLoading && <TweetsSkeleton cards={8} />}
      {users?.length > 0 && <TweetsList users={users} />}
    </TweetsSkeletonTheme>
  );
};
export default TweetsPage;
