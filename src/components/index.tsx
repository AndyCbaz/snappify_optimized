import  { lazy } from "react";

// Exportamos los componentes de forma lazy
export const Box = lazy(() => import("../components/CustomBox"));
export const Button = lazy(() => import("../components/CustomButton"));
