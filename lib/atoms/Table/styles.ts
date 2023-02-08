import { StyleProps } from "@chakra-ui/react";
import { colors } from "../../theme/consts/colors.const";
import { commonStyle } from "../../theme/consts/commonStyle.const";

export const styles = {
  tableWrap: {
    overflowX: "auto",
    w: "full",
  },
  tableHeadRow: {
    backgroundColor: "transparent",
    h: "70px",
  },
  th: {
    fontWeight: "600",
    textTransform: "capitalize",
    whiteSpace: "nowrap",
    p: {
      base: "10px 10px",
      lg: "13px 20px",
    },
  },
  tr: {
    cursor: "pointer",
    w: "full",
    _hover: {
      // backgroundColor: "gray.50",
    },
  },
  thInner: {
    display: "flex",
    gap: "14px",
    alignItems: "center",

    color: "#525f7f",
    fontWeight: "700",
    fontSize: "16px !important",
  },
  td: {
    color: "#525f7f",
    position: "relative",
    fontWeight: "500 !important",
    fontSize: "14px !important",
    whiteSpace: "nowrap",
    p: {
      base: "10px 10px",
      lg: "13px 20px",
    },
  },
  paginationWrap: {
    justifyContent: "space-between",
    flexDir: {
      base: "column",
      sm: "row",
    },
    gap: commonStyle.componentGap,
    w: "full",
    px: "24px",
    pb: "25px",
    pt: "25px",
  },
  paginationButton: {
    h: "40px",
    p: ["0 8px", "0 20px"],
    w: ["auto", "auto"],
  },
  menuButton: {
    color: colors.brand,
    bg: "gray.100",
    _hover: {
      color: colors.brand,
    },
    _active: {
      color: colors.brand,
    },
  },
  menuItem: {
    fontSize: ["sm", "lg"],
    _hover: {
      // color: "gray.100",
      // bg: colors.neutral[2],
    },
    _focus: {
      bg: "gray.200",
    },
  },
  checkbox: {
    top: "3px",
    position: "relative",
  },
  loadmore: {}
} as {
  [key: string]: StyleProps;
};
