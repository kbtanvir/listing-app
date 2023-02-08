import { HStack, VStack } from "@chakra-ui/react";
import { Sidebar } from "./SidebarLayout/Sidebar/Sidebar";
import { LeftSidebar } from "./SidebarLayout/SidebarLayout";
import { styles } from "./styles";
import { TopBar } from "./Topbar/TopBar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <VStack bg="gray.50" w="full" pb="100px" alignItems={"stretch"}>
      <TopBar />

      <HStack {...styles.contentWrapper}>
        {" "}
        <LeftSidebar>
          <Sidebar />
        </LeftSidebar>
        {children}
      </HStack>
    </VStack>
  );
}
