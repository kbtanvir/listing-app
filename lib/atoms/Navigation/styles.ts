import { StyleProps } from "@chakra-ui/react";

export const styles = {
  card: {
    alignItems: "center",
    p: "0",
    borderRadius: "10",
  },

  wrapper: {
    flex: 1,
    w: "full",
    height: "full !important",
    gap: 1,
  },

  listItem: {
    w: "full",
    h: "70px",
    justifyContent: "start",
    px: "40px",
    color: "gray.900",
    fontSize: "lg",
    borderLeft: "3px solid",
    borderColor: "transparent",
    transition: "ease-in-out .4s",
    cursor: "pointer",
    _hover: {
      background: "brand.50",
      borderColor: "brand.100",
    },
  },

  menuText: {
    minW: "100px",
    flex: 1,
    fontSize: "18px",
    fontWeight: "700",
    _hover: {
      color: "gray.800",
    },
  },

  // icon: {
  //   w: "20px",
  //   color: "gray.800",
  // },
} as {
  [key: string]: StyleProps;
};
