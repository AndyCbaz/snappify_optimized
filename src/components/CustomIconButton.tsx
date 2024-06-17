import React from "react";
import { IconButton, IconButtonProps } from "@chakra-ui/react";

// Definimos las propiedades del CustomBox extendiendo las propiedades de Box
interface CustomIconButtonProps extends IconButtonProps {
  // Puedes agregar propiedades personalizadas aquí si es necesario
}

const CustomIconButton: React.FC<CustomIconButtonProps> = ({ ...props }) => {
  return <IconButton {...props} />;
};

export default CustomIconButton;
