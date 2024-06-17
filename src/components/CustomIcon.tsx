import React from "react";
import { Icon, IconProps } from "@chakra-ui/react";

// Definimos las propiedades del CustomBox extendiendo las propiedades de Box
interface CustomIconProps extends IconProps {
  // Puedes agregar propiedades personalizadas aquí si es necesario
}

const CustomIcon: React.FC<CustomIconProps> = ({ ...props }) => {
  return <Icon {...props} />;
};

export default CustomIcon;
