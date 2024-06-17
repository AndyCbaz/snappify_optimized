import React, { Suspense } from "react";
import { useRoutes, useLocation } from "react-router-dom";

// Importación de componentes de forma dinámica
const HomePage = React.lazy(() => import("../pages/HomePage"));
const PrivacyPolicy = React.lazy(() => import("../pages/PrivacyPolicyPage"));
const NotFound = React.lazy(() => import("../pages/NotFoundPage"));

export const Routes = () => {
  const element = useRoutes([
    // Rutas públicas antes del login
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/privacypolicy",
      element: <PrivacyPolicy />,
    },

    // Rutas no encontradas
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);

  const location = useLocation();
  if (!element) return null;

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      {React.cloneElement(element, { key: location.pathname })}
    </Suspense>
  );
};
