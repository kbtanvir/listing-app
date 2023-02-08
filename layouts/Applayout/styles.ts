import { StyleProps } from "@chakra-ui/react";
import { commonStyle } from "../../lib/theme/consts/commonStyle.const";

export const styles = {
  contentWrapper: {
    flex: 1,
    alignItems: "stretch",
    position: "relative",
    justifyContent: "start",
    overflow: "hidden",
    bg: "gray.50",
    gap: commonStyle.componentGap,
    minH: "100vh",
    // px: [0, 4],
  },
} as {
  [key: string]: StyleProps;
};
