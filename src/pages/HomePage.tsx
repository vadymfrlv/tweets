import { Box } from '../components/Box/Box';
import { Title } from '../components/Title/Title';

const HomePage = () => {
  return (
    <Box display="flex" height="100vh" justifyContent="center" alignItems="center">
      <Title titleText="Hey, this is Tweets!" />
    </Box>
  );
};

export default HomePage;
