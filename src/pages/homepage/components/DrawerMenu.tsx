import React from "react";
// chakra ui
import { DrawerContent, DrawerCloseButton } from "@chakra-ui/react";
import { DrawerHeader, DrawerOverlay } from "@chakra-ui/react";
import { Drawer, DrawerBody, Icon } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
// custom components
import { Box, Image, Text, Button } from "../../../components";
// hooks
import { useTranslation } from "react-i18next";
// helpers
import { scrollToSection } from "../../../helpers/scrollToSection";
// icons
import { IoIosArrowForward } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";

interface DrawerComponentProps {
  isOpen: boolean;
  onOpen?: () => void;
  onClose: () => void;
  logo: string;
  btnDrawerRef: React.RefObject<HTMLButtonElement>;
  refList: { ref: React.RefObject<HTMLElement>; title: string }[];
}

const DrawerComponent: React.FC<DrawerComponentProps> = ({
  isOpen,
  onClose,
  logo,
  btnDrawerRef,
  refList,
}) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnDrawerRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent className="rounded-b-[30px]">
          <DrawerCloseButton color="primary.200" />
          <DrawerHeader className="bg-green-800">
            <Box id="logo-container-drawer">
              <Image loading="lazy" src={logo} alt="Snappiffy Logo" w="200px" />
            </Box>
          </DrawerHeader>

          <DrawerBody className="flex flex-col gap-4">
            <Box
              id="optionsHeader-drawer"
              className="flex flex-row items-center justify-between"
            >
              <Menu>
                <MenuButton
                  as={Button}
                  aria-label="Options"
                  leftIcon={<GrLanguage />}
                  variant="ghost"
                  colorScheme="whiteAlpha"
                  fontSize="20px"
                  color="primary.200"
                >
                  <Text className="text-lg">Languages</Text>
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => changeLanguage("en")}>
                    English
                  </MenuItem>
                  <MenuItem onClick={() => changeLanguage("es")}>
                    Español
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            {refList.map((item, index) => (
              <Box
                as="button"
                key={index}
                className="flex w-full flex-row items-center justify-between hover:scale-105"
                onClick={() => scrollToSection(item.ref)}
              >
                <Text color="primary.200" className="text-xl font-bold">
                  {item.title}
                </Text>
                <Icon as={IoIosArrowForward} boxSize={6} color="primary.200" />
              </Box>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
