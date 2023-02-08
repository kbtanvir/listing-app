import { StyleProps } from "@chakra-ui/react";

export const styles = {
  sidebar: {
    transition: "ease-in-out .6s",
    top: 0,
    bottom: 0,
    zIndex: [999, 99],
    position: {
      base: "absolute",
      xl: "relative",
    },
    minW: "330px",
  } as StyleProps,
  fixed: {
    position: "fixed",
    overflowY: "auto",
    minW: "330px",
    bg: "white",
    top: 0,
    bottom: 0,
    gap: 10,
    boxShadow: "0 0 10px 0 rgba(0,0,0,.1)",
  } as StyleProps,
};
