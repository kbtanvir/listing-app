import { ComponentStyleConfig } from "@chakra-ui/react";

export enum InputVariant {
  "primary" = "primary",
  "text" = "text",
  "icon-white" = "icon-white",
  "icon-gray" = "icon-gray",
  SearchFormWhite = "SearchFormWhite",
  SearchForm = "SearchForm",
}

export const InputStyle = {
  variants: {
    [InputVariant.primary]: {
      field: {
        bg: "white",
        color: "gray.900",
        mt: "0 !important",
        h: "48px",
        border: "1px solid ",
        borderColor: "gray.300",
        fontSize: "14px",
        _placeholder: {
          color: "gray.500",
        },
      },
    },
    [InputVariant.SearchFormWhite]: {
      field: {
        bg: "white",
        color: "gray.600",
        fontSize: "14px",
        h: "50px",
        border: "1px solid",
        borderColor: "gray.300",
        fontWeight: "400",
        pl: "70px !important",
        pr: "20px !important",
        _placeholder: {
          color: "gray.500",
        },
      },
    },
    [InputVariant.SearchForm]: {
      field: {
        placeholder: "Search...",
        bg: "gray.100",
        color: "gray.600",
        fontSize: "14px",
        border: "none",
        fontWeight: "400",
        pl: "70px !important",
        pr: "20px !important",
        _placeholder: {
          color: "gray.500",
        },
      },
    },
  },
  defaultProps: {
    size: "lg",
    variant: InputVariant.primary,
  },
} as ComponentStyleConfig;
