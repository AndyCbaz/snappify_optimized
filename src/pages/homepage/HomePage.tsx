import React, { Suspense } from "react";
// custom components
import { Box } from "../../components";
// page components
import { DrawerMenu, HeaderSection } from "./components";
// hooks
import { useTranslation } from "react-i18next";
import { useDisclosure } from "@chakra-ui/react";
// estilos
import "../../styles/header.css";

const HomePage: React.FC = () => {
  // constantes
  const logo =
    "https://kxdbpkaywjrudesmonef.supabase.co/storage/v1/object/public/assets-files/logo_full.webp";
  // hooks
  const { t } = useTranslation();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  // referencias
  const btnDrawerRef = React.useRef<HTMLButtonElement>(null);
  const refSection1 = React.useRef<HTMLDivElement>(null);
  const refList = [{ ref: refSection1, title: t("header.nav1") }];

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Box className="h-dvh w-full">
        {/* HEADER SECTION */}
        <header className="background-header fixed z-20 flex w-full justify-between gap-4 px-2 py-2 md:px-10">
          <HeaderSection refList={refList} logo={logo} onOpen={onDrawerOpen} />
        </header>
        <DrawerMenu
          isOpen={isDrawerOpen}
          onOpen={onDrawerOpen}
          onClose={onDrawerClose}
          logo={logo}
          btnDrawerRef={btnDrawerRef}
          refList={refList}
        />
      </Box>
    </Suspense>
  );
};

export default HomePage;
