import { StyleProps } from "@chakra-ui/react";
import { commonStyle } from "../../../lib/theme/consts/commonStyle.const";

export const styles = {
  topBar: {
    h: "72px",
    px: commonStyle.padding,
    bg: "white",
    borderBottom: "1px solid",
    borderColor: "gray.200",
    position: "fixed",
    justifyContent: "space-between",
    w: "full",
    zIndex: 999,
    gap: commonStyle.componentGap,
  },
  logo: {
    width: "200px",
    h: "18px",
    // position: "relative",
    alt: "",
  },
} as {
  [key: string]: StyleProps;
};
