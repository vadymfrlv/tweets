import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { SkeletonCardsProps } from '../../../types/types';

import {
  CardList,
  CardItem,
  Logo,
  Avatar,
  Tweets,
  Followers,
  Button,
} from './TweetsSkeleton.styled';

export const TweetsSkeleton = ({ cards }: SkeletonCardsProps) => {
  return (
    <CardList>
      {Array(cards)
        .fill(0)
        .map((_, i) => (
          <CardItem key={i}>
            <Logo>
              <Skeleton width={76} height={25} />
            </Logo>
            <Avatar>
              <Skeleton circle width={80} height={80} />
            </Avatar>
            <Tweets>
              <Skeleton width={100} height={30} />
            </Tweets>
            <Followers>
              <Skeleton width={150} height={30} />
            </Followers>
            <Button>
              <Skeleton width={190} height={50} borderRadius="10px" />
            </Button>
          </CardItem>
        ))}
    </CardList>
  );
};
