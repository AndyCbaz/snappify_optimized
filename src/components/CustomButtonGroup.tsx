import React from "react";
import { ButtonGroup, ButtonGroupProps } from "@chakra-ui/react";

// Definimos las propiedades del CustomBox extendiendo las propiedades de Box
interface CustomButtonProps extends ButtonGroupProps {
  // Puedes agregar propiedades personalizadas aquí si es necesario
}

const CustomBox: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  return <ButtonGroup {...props}>{children}</ButtonGroup>;
};

export default CustomBox;
