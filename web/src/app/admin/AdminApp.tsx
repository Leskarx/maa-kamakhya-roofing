import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { AdminLayout } from './components/AdminLayout';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import QuoteRequestsPage from './pages/QuoteRequestsPage';
import ProjectsPage from './pages/ProjectsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactInfoPage from './pages/ContactInfoPage';
import HomepageSettingsPage from './pages/HomepageSettingsPage';
import ServiceAreasPage from './pages/ServiceAreasPage';
import ProfileSettingsPage from './pages/ProfileSettingsPage';

function RequireAuth({ children }: { children: React.ReactNode }) {
  const isAuth = sessionStorage.getItem('admin_auth') === 'true';
  if (!isAuth) return <Navigate to="/admin/login" replace />;
  return <>{children}</>;
}

export default function AdminApp() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route
        element={
          <RequireAuth>
            <AdminLayout />
          </RequireAuth>
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path="quotes" element={<QuoteRequestsPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="contact" element={<ContactInfoPage />} />
        <Route path="homepage" element={<HomepageSettingsPage />} />
        <Route path="service-areas" element={<ServiceAreasPage />} />
        <Route path="profile" element={<ProfileSettingsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
}
