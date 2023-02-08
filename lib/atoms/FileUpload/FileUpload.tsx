import { Box } from "@chakra-ui/react";

export default function CustomFileUpload({
  onChange,
}: {
  onChange: (file: any) => void;
}) {
  return (
    <Box
      w={["full", "350px"]}
      border="1px dashed"
      borderColor="gray.300"
      borderRadius="md"
      p={4}
    >
      <input
        type="file"
        onChange={e => {
          onChange(e.target.files![0]);
        }}
      />
    </Box>
  );
}
