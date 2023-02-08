import { ComponentStyleConfig } from "@chakra-ui/react";

export enum TextAreaVariant {
  "primary" = "primary",
}

export const TextAreaStyle = {
  variants: {
    [TextAreaVariant.primary]: {
      bg: "white",
      color: "gray.900",
      mt: "0 !important",
      h: "120px",
      border: "1px solid ",
      borderColor: "gray.300",
      fontSize: "14px",
      _placeholder: {
        color: "gray.400",
      },
    },
  },
  defaultProps: {
    // size: "lg",
    variant: TextAreaVariant.primary,
  },
} as ComponentStyleConfig;
