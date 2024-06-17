import React from "react";
import { Text, TextProps } from "@chakra-ui/react";

// Definimos las propiedades del CustomBox extendiendo las propiedades de Box
interface CustomTextProps extends TextProps {
  // Puedes agregar propiedades personalizadas aquí si es necesario
}

const CustomText: React.FC<CustomTextProps> = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};

export default CustomText;
