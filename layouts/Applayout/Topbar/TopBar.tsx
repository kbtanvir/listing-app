import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, HStack, Text } from "@chakra-ui/react";
import {
  globalStore,
  useGlobalStore,
} from "../../../features/common/global.store";
import { TextVariant } from "../../../lib/theme/components/Text";
import { DropdownMenu } from "../DropDownMenu/DropdownMenu";
import { styles } from "./styles";

export function TopBar() {
  return (
    <HStack {...styles.topBar}>
      {/*  */}
      <Box>
        <Text variant={TextVariant.heading2}>Bakala</Text>
        {/* <Image w="full" src="/logo.svg" /> */}
      </Box>

      <TopRightMenu />

      {/* TOP RIGHT MENU */}
    </HStack>
  );
}
function TopRightMenu() {
  const { sidebarToggle } = useGlobalStore();
  return (
    <HStack justifyContent={"end"} alignItems="center">
      {/* <Box>
        <BellIcon />
      </Box> */}
      <DropdownMenu />
      <Box
        top="2px"
        position={"relative"}
        display={["block", "none"]}
        onClick={e => {
          globalStore.setSidebarToggle(!sidebarToggle);
        }}
      >
        <HamburgerIcon fontSize="lg" color="green" />
      </Box>
    </HStack>
  );
}

/* 
function TopMenu() {
  const { t } = useTranslation();
  const [idx, setidx] = useState<null | number>(null);

  return (
    <HStack alignItems={"center"} justifyContent="center" pl={["130px", 0]}>
      {[
        {
          text: t("Team"),
          icon: (color: any) => <UsersIcon color={color} />,
          onClick: () => Router.push(AppRoutes.Users.baseURL),
        },
        {
          text: t("Project"),
          icon: (color: any) => <ProjectIcon color={color} />,
          onClick: () => Router.push(AppRoutes.Products.baseURL),
        },
      ].map((item, index) => (
        <Button
          key={index}
          onMouseOver={() => setidx(index)}
          onMouseLeave={() => setidx(null)}
          variant={ButtonVariant.tab}
          onClick={item.onClick}
          leftIcon={item.icon(idx === index ? colors.heading : "#919191")}
          iconSpacing={"12px"}
          h="72px"
          mb="-2px"
          color={idx === index ? colors.heading : "#919191"}
        >
          {item.text}
        </Button>
      ))}
    </HStack>
  );
}
 */
