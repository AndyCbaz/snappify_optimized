import React from "react";
import { scrollToSection } from "../../../helpers/scrollToSection";
import { useChangeLanguage } from "../../../hooks/useChangeLanguage";
import { Box, Button, ButtonGroup } from "../../../components";
import { Image, Text } from "../../../components";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
// iconos
import { GrLanguage } from "react-icons/gr";
import { HiMenu } from "react-icons/hi";

interface HeaderSectionProps {
  logo: string;
  onOpen: () => void;
  refList: { ref: React.RefObject<HTMLElement>; title: string }[];
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  logo,
  onOpen,
  refList,
}) => {
  // Variables reactivas
  const [indexSelected, setIndexSelected] = React.useState(0);
  // Hooks
  const changeLanguage = useChangeLanguage();
  return (
    <>
      {/* logo container */}
      <Box>
        <Image
          src={logo}
          alt="Snappiffy Logo"
          className="w-[250px]"
          loading="lazy"
        />
      </Box>
      {/* nav bar */}
      <nav className="hidden flex-grow lg:flex">
        <ButtonGroup className="items-center gap-4">
          {refList.map((item, index) => (
            <Button
              onClick={() =>
                scrollToSection(refList[index].ref, index, setIndexSelected)
              }
              variant="link"
              color="#f7fee7"
              key={index}
            >
              <Text
                className={`text-sm font-bold ${index == indexSelected ? "text-green-300" : "text-lime-50"}`}
              >
                {item.title}
              </Text>
            </Button>
          ))}
        </ButtonGroup>
      </nav>
      {/* language option */}
      <Box className="flex items-center">
        <Box className="z-10 hidden md:flex">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<GrLanguage />}
              variant="ghost"
              colorScheme="whiteAlpha"
              fontSize="22px"
              color="white"
              isRound
            />
            <MenuList>
              <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
              <MenuItem onClick={() => changeLanguage("es")}>Español</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box className="lg:hidden">
          <IconButton
            icon={<HiMenu />}
            aria-label="Go to section"
            onClick={onOpen}
            variant="ghost"
            colorScheme="whiteAlpha"
            id="burguerMenu"
            className="mr-2 rounded-full p-2 hover:bg-green-800 hover:opacity-90"
            boxSize={8}
          />
        </Box>
      </Box>
      {/* burguer menu */}
    </>
  );
};

export default HeaderSection;
