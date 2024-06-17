import React from "react";
import { Image as ImageChakra, ImageProps } from "@chakra-ui/react";

// Definimos las propiedades del CustomBox extendiendo las propiedades de Box
interface CustomImageProps extends ImageProps {
  // Puedes agregar propiedades personalizadas aquí si es necesario
}

const CustomImage: React.FC<CustomImageProps> = ({ src, ...props }) => {
    React.useEffect(() => {
      const img = new Image();
      img.src = src as string;
    }, [src]);
  return <ImageChakra src={src} {...props}/>;
};

export default CustomImage;
