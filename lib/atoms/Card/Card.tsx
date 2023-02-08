import { Box, StyleProps } from "@chakra-ui/react";

export function Card({
  children,
  styles,
}: {
  styles?: StyleProps;
  children: React.ReactNode;
}) {
  return (
    <Box
      {...{
        bg: "white",
        w: "100%",
        borderRadius: "10",
        minH: "100px",
        p: 8,
        ...styles,
      }}
    >
      {children}
    </Box>
  );
}
