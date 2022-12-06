import { Route, Routes } from 'react-router-dom';

import { LandingLayout } from '@/components/layout';

import { Home } from './Home';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
