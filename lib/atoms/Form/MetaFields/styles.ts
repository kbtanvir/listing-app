import { StyleProps } from "@chakra-ui/react";

export const styles = {
  grid: {
    gap: 4,
    pl: {
      base: "0",
      // md: "1rem",
    },
    
    gridTemplateColumns: {
      base: "repeat(auto-fill, minmax(100%, 1fr))",
      lg: "repeat(auto-fill, minmax(40%, 1fr))",
    },
  },
} as {
  [key: string]: StyleProps;
};
