import { lazy } from "react";

// Exportamos los componentes de forma lazy
export const Box = lazy(() => import("../components/CustomBox"));
export const Button = lazy(() => import("../components/CustomButton"));
export const Image = lazy(() => import("../components/CustomImage"));
export const ButtonGroup = lazy(
  () => import("../components/CustomButtonGroup"),
);
export const Text = lazy(() => import("../components/CustomText"));