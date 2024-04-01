import { ButtonHTMLAttributes } from "react";
import { ButtonVariantEnum } from "./types";
import "./index.css";

function Button(
  props: ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariantEnum;
  }
) {
  const { variant = ButtonVariantEnum.TRANSPARENT, children } = props;

  return (
    <button {...props} className={`${variant} button`}>
      {children}
    </button>
  );
}

export default Button;
