import { ComponentStyleConfig } from "@chakra-ui/react";
import { colors } from "../consts/colors.const";

export enum TextVariant {
  primary = "primary",
  label = "label",
  subTitle = "subTitle",
  bodySM = "bodySM",
  bodyMD = "bodyMD",
  heading2 = "heading2",
  heading3 = "heading3",
  heading4 = "heading4",
}

export const TextStyle = {
  variants: {
    [TextVariant.bodySM]: {
      fontSize: "14px",
    },
    [TextVariant.bodyMD]: {
      fontSize: "18px",
    },
    [TextVariant.label]: {
      fontSize: "14px",
    },
    [TextVariant.subTitle]: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "170%",
      color: "gray.400",
    },
    [TextVariant.heading2]: {
      fontWeight: 700,
      fontSize: ["20px", "30px"],
      color: colors.heading,
    },
    [TextVariant.heading3]: {
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "38.4px",
      color: colors.heading,
    },
    [TextVariant.heading4]: {
      fontWeight: 700,
      fontSize: "20px",
      color: colors.heading,
    },
  
  },

  defaultProps: {
    size: TextVariant.primary,
    variant: TextVariant.primary,
  },
} as ComponentStyleConfig;
