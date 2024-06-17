import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

// Definimos las propiedades del CustomBox extendiendo las propiedades de Box
interface CustomBoxProps extends BoxProps {
  // Puedes agregar propiedades personalizadas aquí si es necesario
}

const CustomBox: React.FC<CustomBoxProps> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};

export default CustomBox;
