import { Box, VStack } from "@chakra-ui/react";
import Router from "next/router";
import { useTranslation } from "react-i18next";
import { CloseIcon } from "../../../../features/common/CustomIcons";
import { globalStore } from "../../../../features/common/global.store";
import { Navigation } from "../../../../lib/atoms/Navigation/Navigation";
import { commonStyle } from "../../../../lib/theme/consts/commonStyle.const";
import { stringToPath } from "../../../../lib/utils/helper";

export function Sidebar() {
  const { t } = useTranslation();
  return (
    <VStack
      w="full"
      pt={["40px", "100px"]}
      minH="100vh"
      justifyContent={["start"]}
      alignItems="start"
      gap={commonStyle.componentGap}
    >
      <Box
        onClick={() => {
          globalStore.setSidebarToggle(false);
        }}
        pl="40px"
        display={["block", "none"]}
      >
        <CloseIcon />
      </Box>
      <VStack w="full" gap="32px">
        <VStack w="full" flex="1" gap="10" zIndex={0}>
          <Navigation
            navList={["Products", "Categories", "Orders"].map(item => ({
              text: t(item),
              url: stringToPath(item),
              onClick: () => Router.push(`/${stringToPath(item)}`),
            }))}
          />
        </VStack>
      </VStack>
      {/* <VStack w="full" p="40px">
        <CreateTeam />
      </VStack> */}
    </VStack>
  );
}
