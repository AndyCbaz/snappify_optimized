import { lazy } from "react";

// Exportamos los componentes de forma lazy
export const HeaderSection = lazy(() => import("../components/HeaderSection"));
export const DrawerMenu = lazy(() => import("../components/DrawerMenu"));