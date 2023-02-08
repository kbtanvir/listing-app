import { Stack } from "@chakra-ui/react";
import RootView from "../../features/categories/view/RootView";
import AppLayout from "../../layouts/Applayout/AppLayout";
import { commonStyle } from "../../lib/theme/consts/commonStyle.const";

export default function index() {
  return (
    <AppLayout>
      <Stack w="full" alignItems={"center"} pt={commonStyle.rootPT}>
        <RootView />
      </Stack>
    </AppLayout>
  );
}
