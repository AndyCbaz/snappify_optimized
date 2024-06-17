import React from "react";
import ReactDOM from "react-dom/client";
import i18n from "./services/languages/i18n.service.ts";
import { Routes } from "./routes/Routes.tsx";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { I18nextProvider } from "react-i18next";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ChakraProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ChakraProvider>
    </I18nextProvider>
  </React.StrictMode>,
);
