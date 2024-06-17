import React from "react";
import { Image, ImageProps } from "@chakra-ui/react";

// Definimos las propiedades del CustomBox extendiendo las propiedades de Box
interface CustomImageProps extends ImageProps {
  // Puedes agregar propiedades personalizadas aquí si es necesario
}

const CustomImage: React.FC<CustomImageProps> = ({ children, ...props }) => {
  return <Image {...props}>{children}</Image>;
};

export default CustomImage;
