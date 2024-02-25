import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Project from 'src/pages/Project';
import NotFound from 'src/pages/NotFound';

const MainRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
