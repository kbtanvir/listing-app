import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { t } from "i18next";
import { styles } from "../styles";

export default function TableFooter({
  rowsPerPage,
  setRowsPerPage,
  data,
  activePage,
  page,
  handlePageClick,
}: {
  rowsPerPage: number;
  setRowsPerPage: (rowsPerPage: number) => void;
  data: any[];
  activePage: number;
  page: number;
  handlePageClick: (data: { selected: number }) => void;
}) {
  return (
    <HStack {...styles.paginationWrap}>
      {/* SHOW COUNT */}
      <HStack gap="5">
        <Menu>
          <MenuButton
            as={Button}
            minW="130px"
            h="40px"
            {...styles.menuButton}
            sx={{ "& > span": { fontWeight: "600" } }}
            rightIcon={<ChevronDownIcon fontSize={"20"} />}
          >
            <>
              {t("Show")} {rowsPerPage}
            </>
          </MenuButton>
          <MenuList p={0} minW="130px">
            {[5, 10, 20, 50].map((item, i) => {
              return (
                <MenuItem
                  {...styles.menuItem}
                  key={i}
                  onClick={() => setRowsPerPage(item)}
                >
                  {item}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </HStack>
      {/* PAGINATION */}
      <HStack justifyContent={"center"}>
        {data.length > 0 && (
          <>
            <Button
              {...styles.paginationButton}
              onClick={() => handlePageClick({ selected: activePage - 1 })}
              disabled={activePage === 0}
            >
              Prev
            </Button>

            {[
              activePage === 0 ? activePage : activePage - 1,
              activePage,
              activePage === page - 1 ? activePage : activePage + 1,
            ].map((item, i) => {
              return (
                <Button
                  {...styles.paginationButton}
                  key={i}
                  onClick={() => handlePageClick({ selected: item })}
                  disabled={activePage === item}
                  minW={"0"}
                  w={["30px", "20px", "30px"]}
                  p={[0, 0, 0]}
                  fontSize={["12px", "14px", "16px"]}
                >
                  {item + 1}
                </Button>
              );
            })}

            <Button
              {...styles.paginationButton}
              onClick={() => handlePageClick({ selected: activePage + 1 })}
              disabled={activePage === page - 1}
            >
              Next
            </Button>
          </>
        )}
      </HStack>
    </HStack>
  );
}
