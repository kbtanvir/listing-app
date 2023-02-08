import { ComponentStyleConfig } from "@chakra-ui/react";
import { colors } from "../consts/colors.const";

export enum ButtonVariant {
  solid = "solid",
  solidAlt = "solidAlt",
  outline = "outline",
  text = "text",
  iconWhite = "iconWhite",
  iconGray = "iconGray",
  solidWhite = "solidWhite",
  solidGray = "solidGray",
  tab = "tab",
  dropdownButton = "dropdownButton",
}

export const ButtonStyle = {
  variants: {
    [ButtonVariant.solid]: {
      bg: "brand.100",
      color: "white",
      h: "57px",
      fontSize: "16px",
      fontWeight: 700,
      _hover: {
        bg: colors.dark[0],
      },
    },
    [ButtonVariant.solidAlt]: {
      bg: "gray.100",
      color: "gray.900",
      h: "57px",
      fontSize: "16px",
      fontWeight: 700,
      _hover: {
        bg: "gray.200",
      },
    },
    [ButtonVariant.solidWhite]: {
      bg: "white",
      color: "gray.900",
      h: "57px",
      fontSize: "16px",
      fontWeight: 400,
      border: "1px solid",
      borderColor: "gray.300",
      _hover: {
        bg: "gray.200",
      },
    },
    [ButtonVariant.solidGray]: {
      bg: "gray.100",
      color: "gray.900",
      h: "57px",
      fontSize: "16px",
      fontWeight: "bold",
      border: "1px solid",
      borderColor: "gray.300",

      _hover: {
        bg: "gray.200",
      },
    },
    [ButtonVariant.outline]: {
      borderColor: "brand.100",
      borderWidth: "2px",
      color: "brand.100",
      _hover: {
        bg: "brand.100",
        color: "white",
      },
    },
    [ButtonVariant.iconGray]: {
      borderColor: "white",
      borderWidth: "2px",
      color: "white",
      _hover: {
        bg: "white",
        color: "white",
      },
    },
    [ButtonVariant.iconWhite]: {
      borderColor: "brand.100",
      borderWidth: "2px",
      color: "brand.100",
      _hover: {
        bg: "brand.100",
        color: "white",
      },
    },
    [ButtonVariant.tab]: {
      color: "gray.400",
      fontWeight: 700,
      fontSize: "16px",
      borderBottom: "3px solid",
      borderColor: "transparent",
      borderRadius: "0",
      _hover: {
        color: colors.heading,
        borderColor: "brand.100",
      },
    },

    [ButtonVariant.text]: {
      padding: "0px 10px",
      height: "fit-content",
      fontSize: "16px",
      fontWeight: "400",
      paddingInlineStart: "0px !important",
      paddingInlineEnd: "0px !important",
      color: "gray.400",
      _hover: {
        textDecor: "underline",
        textUnderlineOffset: "2px",
        textUnderlinePosition: "under",
        color: "brand.100",
      },
    },
    [ButtonVariant.dropdownButton]: {
      bg: "white",
      mt: "0 !important",
      h: "50px",
      border: "1px solid",
      borderColor: "gray.300",
      fontSize: "14px",
      textAlign: "left",
      px: "16px",
      minW: "121px",
      _hover: {
        bg: "white",
      },
      _active: {
        bg: "gray.100",
      },
    },
  },

  defaultProps: {
    size: "lg",
    variant: "solid",
    // colorScheme: "green", // default is gray
  },
} as ComponentStyleConfig;
