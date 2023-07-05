import React from 'react';
import { TitleProps } from '../../types/types';

import { TitleText } from './Title.styled';

export const Title: React.FC<TitleProps> = ({ titleText }) => {
  return <TitleText>{titleText}</TitleText>;
};
