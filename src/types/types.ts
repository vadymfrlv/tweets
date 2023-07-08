export interface User {
  id: number;
  user: string;
  tweets: number;
  followers: number;
  avatar: string;
}

export interface Users {
  users: User[];
}

export type TitleProps = {
  titleText: string;
};

export type LoadMoreBtnProps = {
  type: string;
  onClick: () => void;
};

export type FollowingBtnProps = {
  type: string;
  isFollowing: boolean;
  onClick: () => void;
};

export type SkeletonCardsProps = {
  cards: number;
};
