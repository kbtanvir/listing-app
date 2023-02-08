import { VStack } from "@chakra-ui/react";
import { useGlobalStore } from "../../../features/common/global.store";
import { styles } from "./styles";

export function LeftSidebar({ children }: { children: React.ReactNode }) {
  const { sidebarToggle } = useGlobalStore();

  return (
    <VStack
      {...styles.sidebar}
      {...{
        ml: {
          base: sidebarToggle ? "0 !important" : "-250px !important",
          xl: "0 !important",
        },
        left: {
          base: sidebarToggle ? "0 !important" : "-250px !important",
          xl: "0 !important",
        },
      }}
    >
      <VStack   {...styles.fixed}>{children}</VStack>
    </VStack>
  );
}
