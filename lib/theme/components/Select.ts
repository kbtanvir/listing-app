import { ComponentStyleConfig } from "@chakra-ui/react";

export enum SelectVariant {
  "primary" = "primary",
}

export const SelectStyle = {
  variants: {
    [SelectVariant.primary]: {
    
      bg: "white",
      color: "gray.600",
      mt: "0 !important",
      h: "48px",
      border: "1px solid ",
      borderColor: "gray.300",
      fontSize: "14px",
      _placeholder: {
        fontSize: "14px ",
        color: "gray.400",
      },
    },
  },
  defaultProps: {
    size: "lg",
    variant: SelectVariant.primary,
  },
} as ComponentStyleConfig;
