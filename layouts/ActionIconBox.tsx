import { Box } from "@chakra-ui/react";

export default function ActionIconBox({ children, onOpen }: any) {
  return (
    <Box
      as="button"
      border="1px solid"
      borderColor={"gray.300"}
      borderRadius="full"
      p="10px"
      onClick={onOpen}
      transition="all 0.3s"
      _hover={{
        bg: "blue.100",
      }}
    >
      {children}
    </Box>
  );
}
