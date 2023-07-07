import { LoadMoreBtnProps } from '../../types/types';

import { Button } from './LoadMoreBtn.styled';

export const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps) => {
  return (
    <Button type="button" onClick={onClick}>
      Load More
    </Button>
  );
};
