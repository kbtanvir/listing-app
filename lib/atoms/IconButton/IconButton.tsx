import { Box } from "@chakra-ui/react";
import React from "react";

export default function IconButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      as="button"
      border="1px solid"
      borderColor={"gray.300"}
      borderRadius="full"
      p="10px"
      transition="all 0.3s"
      _hover={{
        bg: "blue.100",
      }}
    >
      {children}
    </Box>
  );
}
