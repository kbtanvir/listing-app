import { StyleProps } from "@chakra-ui/react";

export const styles = {
  row: {
    gap: 0,
    w: "full",
    border: "1px solid",
    borderRadius: "md",
    borderColor: "gray.300",
    position: "relative",
    p: "3px 4px",
  },
  col1: {
    flex: 1,
  },
  col2: {
    // flex: 1,
  },
  col3: {
    position: "absolute",
    right: "-40px",
    top: "11px",
  },
  removeButton: {
    w: "30px",
    h: "30px",
    p: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "red.400",
    borderRadius: "full",
    bg: "white",
    border: "2px solid",
    borderColor: "red.500",
    cursor: "pointer",
    transition: "all 0.2s",
    _hover: {
      bg: "red.500",
      color: "white",
    },
  },
  roleSelectionButton: {
    bg: "gray.200",
    color: "gray.600",
    fontSize: "14px",
    fontWeight: "bold",
    w: "112px",
    p: "9px 45px 9px 20px",
    h: "auto",
    borderRadius: "md",
    _hover: {
      bg: "gray.200",
    },
  },
  menuItem:{
    p: "10px 20px",
  }
} as {
  [key: string]: StyleProps;
};
