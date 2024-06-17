import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Box, Icon, Image, Text, Button } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { GrLanguage } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import { scrollToSection } from "../../../helpers/scrollToSection";

interface DrawerComponentProps {
  isOpen: boolean;
  onOpen?: () => void;
  onClose: () => void;
  logo: string;
  btnDrawerRef: React.RefObject<HTMLButtonElement>;
  refList: {ref: React.RefObject<HTMLElement>, title: string}[];
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
              <Image src={logo} alt="Snappiffy Logo" w="200px" />
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
          {/* <DrawerFooter className="flex flex-col justify-start gap-4">
            <Text color="primary.200" className="text-xl font-bold">
              Contact us
            </Text>
            <Box className="flex w-full items-center gap-4">
              <Icon
                as={MdOutlinePhonelinkRing}
                boxSize={6}
                color="primary.200"
              />
              <Text color="primary.200" className="text-lg font-bold">
                +1 (234) 234234
              </Text>
            </Box>
            <Box className="flex w-full items-center gap-4">
              <Icon as={MdOutlineEmail} boxSize={6} color="primary.200" />

              <Text color="primary.200" className="text-sm font-bold">
                <Link href={`mailto:snappiffy@business@gmail.com`} isExternal>
                  snappiffy@business@gmail.com
                </Link>
              </Text>
            </Box>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
