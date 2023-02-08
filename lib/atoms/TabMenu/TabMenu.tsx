import { Box, Button, HStack } from "@chakra-ui/react";
import Router from "next/router";
import { useState } from "react";
import { LittleDot } from "../../../features/common/CustomIcons";
// import { LittleDot } from "../../features/common/Icons";
// import { LittleDot } from "../../features/common/Icons";
import { ButtonVariant } from "../../theme/components/Button";
import { colors } from "../../theme/consts/colors.const";

export type ITabData = {
  text: string;
  url: string;
  showDot?: boolean;
};

export function TabMenu({ tabData }: { tabData: ITabData[] }) {
  const [idx, setidx] = useState<null | number>(0);

  return (
    <HStack
      alignItems={"start"}
      justifyContent="start"
      w="full"
      gap="40px"
      // borderBottom="1px solid"
      overflowX={["scroll"]}
      borderColor={"gray.200"}
      pl={["10px", 0]}
      pb="10px"
      // custom horizontal scrollbar

      sx={{
        "&::-webkit-scrollbar": {
          height: "0px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
      }}
    >
      {tabData.map((item, index) => (
        <Button
          key={index}
          variant={ButtonVariant.tab}
          onClick={() => {
            Router.push(item.url);
            setidx(index);
          }}
          iconSpacing={"12px"}
          mb="-2px"
          px="0"
          pb="10px"
          color={idx === index ? colors.heading : "#919191"}
          borderBottom={"3px solid"}
          borderColor={idx === index ? "brand.100" : "transparent"}
        >
          {item.text}
          {item.showDot && (
            <Box position={"relative"} top="-7px" right="-7px">
              <LittleDot />
            </Box>
          )}
        </Button>
      ))}
    </HStack>
  );
}
