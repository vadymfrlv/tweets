import { Routes, Route } from 'react-router-dom';

import { Box } from './components/Box/Box';
import { AppBar } from './components/AppBar/AppBar';

import HomePage from './pages/HomePage';
import TweetsPage from './pages/TweetsPage';

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<HomePage />} />
          <Route path="tweets" element={<TweetsPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
