import {
  Box,
  Button,
  Checkbox,
  HStack,
  Skeleton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { SortIcon } from "../../../features/common/CustomIcons";
import { DataRow, FilterOptions, Order, TableColumn } from "../../types/table";
import { styles } from "./styles";
import TableFooter from "./TableFooter/TableFooter";
import { TableHeader } from "./TableHeader/TableHeader";

export function CustomTable({
  columns,
  data,
  filterOption,
  showHeader = false,
  showFooter = false,

  onRowClick,
  onRowSelection,
  selectedRowIds,
  isLoading = false,
  onPageChange,
  onLoadMore,
}: {
  columns: TableColumn<any>[];
  data: any[];
  filterOption?: FilterOptions;
  showHeader?: boolean;
  showFooter?: boolean;
  onRowClick?: (row: any) => void;
  onRowSelection?: (rows: any[]) => void;
  selectedRowIds?: string[];
  isLoading?: boolean;
  onPageChange?: (page: number) => void;
  onLoadMore?: () => void;
}) {
  const { t } = useTranslation();
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(100);
  const [rows, setRows] = useState<any[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [activePage, setActivePage] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  /* ========handle page click on pagination ========= */
  const handlePageClick = (data: { selected: number }) => {
    const selectedPage = data.selected;
    setActivePage(data.selected);
    const newOffset = Math.ceil(selectedPage * rowsPerPage);

    setOffset(newOffset);
  };

  useEffect(() => {
    // if (!data.length) return;
    const perPageItem = data.map(row => ({
      id: row.id,
      data: row,
    }));
    // .slice(offset, offset + rowsPerPage);
    setRows(perPageItem);
    // setPage(Math.ceil(data.length / rowsPerPage));
    // onPageChange && onPageChange(activePage);
    setTotal(data.length);
  }, [data, offset, page, rowsPerPage, data.length, onPageChange, activePage]);

  return (
    <>
      {/* TABLE HEADER */}
      {showHeader && (
        <TableHeader
          {...{
            columns,
            filterOption,
            rows,
            total,
          }}
        />
      )}

      {/* TABLE BODY */}

      <Box {...styles.tableWrap}>
        <Table variant="simple">
          <Thead {...styles.tableHeadRow}>
            <Tr>
              <Th {...styles.tableHeadCell}>
                <Checkbox
                  size="lg"
                  onChange={e => {
                    if (e.target.checked) {
                      onRowSelection!(rows.map(row => row.id));
                    } else {
                      onRowSelection!([]);
                    }
                  }}
                  isChecked={selectedRowIds?.length === rows.length}
                  defaultChecked={undefined}
                  onBlur={undefined}
                  checked={undefined}
                />
              </Th>
              {columns.map((col, i) => {
                return <HeadCell col={col} key={i} />;
              })}
            </Tr>
          </Thead>
          {isLoading ? (
            <Tbody>
              <Tr>
                <Td
                  colSpan={columns.length}
                  h={window.innerHeight - 400}
                  textAlign="center"
                >
                  {columns.map((_, i) => {
                    return (
                      <Skeleton
                        key={i}
                        height="20px"
                        startColor="gray.100"
                        endColor="gray.200"
                        width="100%"
                      />
                    );
                  })}
                </Td>
              </Tr>
            </Tbody>
          ) : !rows.length ? (
            <Tbody>
              <Tr>
                <Td
                  colSpan={columns.length}
                  h={window.innerHeight - 400}
                  textAlign="center"
                >
                  {t("No data found")}
                </Td>
              </Tr>
            </Tbody>
          ) : (
            <Tbody>
              {rows.map((row, i) => {
                return (
                  <TableRow
                    columns={columns}
                    key={row.id}
                    row={row.data}
                    onClick={onRowClick || (() => {})}
                    onRowSelection={onRowSelection || (() => {})}
                    selectedRowIds={selectedRowIds || []}
                  />
                );
              })}
            </Tbody>
          )}
        </Table>
      </Box>

      {/* TABLE FOOTER */}
      {showFooter && (
        <TableFooter
          {...{
            rowsPerPage,
            setRowsPerPage,
            data,
            activePage,
            page,
            handlePageClick,
          }}
        />
      )}
      {/* LOAD MORE */}

      {onLoadMore && (
        <HStack justifyContent={"center"} py="10">
          <Button onClick={() => onLoadMore()}>{t("Load More")}</Button>
        </HStack>
      )}
    </>
  );
}

function HeadCell({ col }: { col: TableColumn<DataRow> }) {
  const [order, setorder] = useState<Order>("desc");
  return (
    <Th
      onClick={() => {
        setorder(order === "asc" ? "desc" : "asc");
        col.sortField && col.sortField(col.index, order);
      }}
      {...{
        position: "relative",
        left: col.fixed ?? "unset",
        right: col.fixed ?? "unset",
        zIndex: col.fixed ?? "unset",
        cursor: col.sortField ? "pointer" : "default",
        w: col.width ?? "40%",
        ...styles.th,
      }}
    >
      <Box {...styles.thInner}>
        {/* COL NAME */}

        {col.name}

        {/* SORT ARROW */}
        {col.sortField && <SortIcon />}
      </Box>
    </Th>
  );
}

function TableRow({
  columns,
  row,
  onClick,
  selectedRowIds,
  onRowSelection,
}: {
  columns: TableColumn<DataRow>[];
  row: DataRow;
  onClick?: (row: DataRow) => void;
  selectedRowIds?: any[];
  onRowSelection?: (rowIds: any[]) => void;
}) {
  return (
    <Tr {...styles.tr} onClick={() => onClick!(row)}>
      <Td>
        <Checkbox
          {...styles.checkbox}
          onChange={e => {
            if (e.target.checked) {
              onRowSelection!([...selectedRowIds!, row.id]);
            } else {
              onRowSelection!(selectedRowIds!.filter(id => id !== row.id));
            }
          }}
          isChecked={selectedRowIds!.includes(row.id)}
        />
      </Td>
      {columns.map((col, i) => (
        <Cell col={col} key={i} row={row} />
      ))}
    </Tr>
  );
}

function Cell({ col, row }: { col: TableColumn<DataRow>; row: DataRow }) {
  return (
    <Td
      {...{
        position: "relative",
        left: col.fixed ?? "unset",
        right: col.fixed ?? "unset",
        zIndex: col.fixed ?? "unset",
        cursor: col.sortField ? "pointer" : "default",
        boxShadow: col.fixed ? "0 0 0 1px #666666" : "unset",
        ...styles.td,
      }}
      sx={{ "& > span": { fontWeight: 500, fontSize: "14px" } }}
    >
      {col.render ? col.render(row) : row}
    </Td>
  );
}
