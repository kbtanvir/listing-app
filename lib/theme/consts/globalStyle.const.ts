import { GlobalStyleProps } from "../../types/chakraTypes";
import { colors } from "./colors.const";

export const globalStyle = {
  global: {
    "*::-webkit-scrollbar": {
      width: "4px",
      height: "4px",
    },

    "*::-webkit-scrollbar-track": {
      width: "6px",
      height: "6px",
    },
    "*::-webkit-scrollbar-thumb": {
      background: "gray.400",
      borderRadius: "24px",
    },
    div: {
      marginInlineStart: "0 !important",
      marginInlineEnd: "0 !important",
      marginTop: "0 !important",
    },

    "html, body, *": {
      lineHeight: "tall",
      fontWeight: "400",
      fontSize: "md",
    },
    a: {
      color: "teal.500",
    },
    h3: {
      fontSize: "24px",
      fontWeight: 700,
      marginBottom: "0px",
      padding: 0,
    },
    h4: {
      fontWeight: "bold",
      fontSize: "2xl",
    },

    // // AUTHLAYOUT
    ".auth-layout": {
      h3: {
        fontWeight: 700,
        fontSize: "24px",
        lineHeight: "120%",
        textAlign: "center",
        mb: "40px",
        color: colors.heading,
      },
      p: {
        fontSize: "sm",
        lineHeight: "1.4",
      },
    } as GlobalStyleProps,
  } as GlobalStyleProps,
};
