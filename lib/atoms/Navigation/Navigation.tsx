import { HStack, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { Card } from "../Card/Card";
import { styles } from "./styles";

type Props = {
  navList: {
    text: string;
    url: string;
    icon?: React.ReactNode;
    onClick: () => void;
  }[];
};

export function Navigation({ navList }: Props) {
  const { t } = useTranslation();
  const Router = useRouter();

  return (
    <Card styles={styles.card}>
      <VStack {...styles.wrapper}>
        {navList.map((item, i) => (
          <HStack
            key={i}
            {...styles.listItem}
            onClick={item.onClick}
            fontWeight={
              Router.query.group && Router.query.group === item.url ? 800 : 600
            }
            borderColor={
              Router.query.group && Router.query.group === item.url
                ? "brand.100"
                : "transparent"
            }
            backgroundColor={
              Router.query.group && Router.query.group === item.url
                ? "brand.50"
                : "transparent"
            }
          >
            {/* <Box position={"relative"} bottom="1px" {...styles.icon}>
              {item.icon}
            </Box> */}
            <Text
              {...styles.menuText}
              color={
                Router.query.group && Router.query.group === item.url
                  ? "gray.900"
                  : "gray.500"
              }
            >
              {t(item.text)}
            </Text>
          </HStack>
        ))}
      </VStack>
    </Card>
  );
}
