import { StyleProps } from "@chakra-ui/react";

export const styles = {
  dropdown: {
    position: "absolute",
    bg: "white",
    borderRadius: "md",
    boxShadow: "md",
    top: "20",
    right: 0,
    minW: "250px",
    zIndex: 1,
    alignItems: "stretch",
    overflow: "hidden",
  },
  welcome: {
    fontSize: "10px",
    textTransform: "uppercase",
    fontWeight: "bold",
    px: "16px",
    py: "8px",
    color: "#32325d",
  },
  menuItem: {
    fontSize: "14px",
    fontWeight: "400",
    color: "#212529",
    m: "0 !important",
    gap: 4,
    px: "16px",
    py: "8px",
    cursor: "pointer",
    _hover: {
      bg: "gray.100",
    },
  },
  menuItemText: {
    fontSize: "14px",
    fontWeight: "400",
    color: "#212529",
  },
} as {
  [key: string]: StyleProps;
};
