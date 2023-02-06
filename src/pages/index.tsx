import { GeneralLayout } from 'layouts';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';

const Pages = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<GeneralLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);

export default Pages;
