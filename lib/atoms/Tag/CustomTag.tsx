import { Tag } from "@chakra-ui/react";

export default function CustomTag({
  text,
  bg = "gray.100",
  color = "gray.600",
}: {
  text: string;
  bg?: string;
  color?: string;
}) {
  return (
    <Tag
      {...{
        minW: "84px",
        maxW: "145px",
        fontSize: "12px",
        fontWeight: "400",
        display: "flex",
        justifyContent: "center",
        h: "32px",
        textAlign: "center",
        bg,
        color,
      }}
    >
      {text}
    </Tag>
  );
}
