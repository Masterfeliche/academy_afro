import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { AppLayout } from "@/app/AppLayout";
import { AboutPage } from "@/pages/AboutPage";
import { CoachesPage } from "@/pages/CoachesPage";
import { ContactPage } from "@/pages/ContactPage";
import { DonationPage } from "@/pages/DonationPage";
import { FeesPage } from "@/pages/FeesPage";
import { GalleryPage } from "@/pages/GalleryPage";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProgramsPage } from "@/pages/ProgramsPage";
import { RegistrationPage } from "@/pages/RegistrationPage";

function RedirectFromSw() {
  const { pathname } = useLocation();
  const target = pathname === "/sw" ? "/" : pathname.replace(/^\/sw/, "") || "/";
  return <Navigate to={target} replace />;
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/sw" element={<Navigate to="/" replace />} />
      <Route path="/sw/*" element={<RedirectFromSw />} />
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="programs" element={<ProgramsPage />} />
        <Route path="fees" element={<FeesPage />} />
        <Route path="donation" element={<DonationPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="coaches" element={<CoachesPage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
