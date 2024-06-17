import React from "react";
import gsap from "gsap";
import { Button, ButtonProps } from "@chakra-ui/react";

interface CustomButtonProps extends ButtonProps {
  // Puedes agregar propiedades personalizadas aquí si es necesario
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  const btnRef = React.useRef(null);
  const scaleDown = () => {
    gsap.to(btnRef.current, { scale: 0.9, duration: 0.1 });
  };

  const scaleUp = () => {
    gsap.to(btnRef.current, { scale: 1, duration: 0.1 });
  };
  return (
    <Button
      ref={btnRef}
      onMouseLeave={scaleUp}
      onMouseDown={scaleDown}
      onMouseUp={scaleUp}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
