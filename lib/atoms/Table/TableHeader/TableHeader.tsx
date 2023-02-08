import { HStack, Text } from "@chakra-ui/react";
// import { CSVLink } from "react-csv";
import { useTranslation } from "react-i18next";
import { DataRow, FilterOptions, TableColumn } from "../../../types/table";
import CustomSelect from "../../Select/CustomSelect";

export function TableHeader({
  rows,
  columns,
  filterOption,
  total
}: {
  rows: any[];
  columns: TableColumn<DataRow>[];
  filterOption?: FilterOptions;
  total: number;
}) {
  const { t } = useTranslation();

  return (
    <HStack
      {...{
        width: "full",
        justifyContent: "space-between",
        px: "20px",
        pt: "24px",
        pb: "25px",
        gap: "24px",
        flexDir: {
          base: "column",
          sm: "row",
        },
        flexWrap: {
          base: "wrap",
        },
      }}
    >
      <Text fontSize={"20px"} fontWeight="500">
        {t("Users List")}
      </Text>
      <HStack
        gap="5"
        {...{
          flexDir: {
            base: "column",
            sm: "row",
          },
          flexWrap: {
            base: "wrap",
            sm: "nowrap",
          },
        }}
      >
        <CustomSelect
          filterOption={filterOption?.options}
          onChange={e => filterOption?.onChange(e)}
          isFilter
        />
      </HStack>
    </HStack>
  );
}
