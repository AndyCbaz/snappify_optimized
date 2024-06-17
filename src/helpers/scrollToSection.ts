import { RefObject } from "react";

export const scrollToSection = (
  ref: RefObject<HTMLElement>,
  index?: number,
  setIndexSelected?: React.Dispatch<React.SetStateAction<number>>,
) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: "smooth" });
    console.log("entre");
  }
    if (index !== undefined && setIndexSelected) {
      setIndexSelected(index);
    }
};
