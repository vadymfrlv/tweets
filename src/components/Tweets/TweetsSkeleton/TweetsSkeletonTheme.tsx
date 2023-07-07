import { SkeletonTheme } from 'react-loading-skeleton';

export const TweetsSkeletonTheme = ({ children }) => {
  return (
    <SkeletonTheme
      baseColor="#ebd8ff"
      highlightColor="rgb(235, 235, 235)"
      borderRadius="0"
      direction="rtl"
      duration={0.3}
    >
      {children}
    </SkeletonTheme>
  );
};
