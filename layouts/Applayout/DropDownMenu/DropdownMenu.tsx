import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import Router from "next/router";
import { useTranslation } from "react-i18next";
import { BiLogOut } from "react-icons/bi";
import { useAuthStore } from "../../../features/auth/logic/auth.store";
import { authService } from "../../../features/auth/logic/services/auth.service";
import { DownArrowIcon } from "../../../features/common/CustomIcons";
import { AppRoutes } from "../../../lib/routes/AppRoutes";
import { notify } from "../../../lib/utils/helper";
import { styles } from "./styles";

export function DropdownMenu() {
  const { t } = useTranslation();
  const { user } = useAuthStore();

  const menuItems = [
    {
      text: t("Logout"),
      link: "#",
      onClick: () => {
        authService.logout();
        Router.push(AppRoutes.Auth.Login);
        notify({
          message: t("Logged out"),
          type: "success",
        });
      },
      icon: <BiLogOut size={26} />,
    },
  ];

  return (
    <Box>
      {/* USER PICTURE */}

      <Menu placement="right">
        <MenuButton>
          <HStack
            pt="8px"
            position={"relative"}
            justify="end"
            alignItems={"center"}
          >
            <Avatar
              size={["sm", "md"]}
              background="green"
              color={"white"}
              fontSize="16px"
              name={user?.name}
            />
            <Text pr="12px" pl="8px" fontSize={"18px"}>
              {user?.name}
            </Text>
            <Box top="1px" position={"relative"} display={["none", "block"]}>
              <DownArrowIcon />
            </Box>
           
          </HStack>
        </MenuButton>

        {/* DROPDOWN MENU */}

        <MenuList right={["-50", "-10px"]} top="10" position={["absolute"]}>
          {/* <Text {...styles.welcome}>{t("Welcome!")}</Text> */}
          {menuItems.map((item, i) => (
            <Link key={i} href={item.link}>
              <MenuItem
                onClick={item.onClick}
                {...styles.menuItem}
                {...{
                  borderTop: item.text !== "Logout" ? "none" : "1px solid",
                  borderColor: "gray.200",
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#212529",
                  m: "0 !important",
                  gap: 4,
                  px: "16px",
                  py: "8px",
                  cursor: "pointer",
                  _hover: {
                    bg: "gray.100",
                  },
                }}
              >
                <HStack w={"20px"} justifyContent="center">
                  {item.icon}
                </HStack>
                <Text {...styles.menuItemText}>{item.text}</Text>
              </MenuItem>
            </Link>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}
