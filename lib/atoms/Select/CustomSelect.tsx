import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { useState } from "react";
type Options = { label: string; value: string };

type CustomSelectProps = {
  isFilter?: boolean;
  filterOption?: Options[];
  onChange: (value: string) => void;
};

const CustomSelect: React.FC<CustomSelectProps> = ({
  filterOption,
  onChange,
  isFilter,
}) => {
  const [selectedRole, setSelectedRole] = useState<string>("");
  return (
    <React.Fragment>
      <Menu
        size="md"
        {...{
          border: "1px solid #e0e0e0",
        }}
      >
        <MenuButton
          variant="unstyled"
          border="1px solid #e0e0e0"
          as={Button}
          rightIcon={<ChevronDownIcon />}
          minW="130px"
          h="40px"
          size={"sm"}
          color={"gray.500"}
          sx={{ "& > span": { fontWeight: "600" } }}
        >
          {selectedRole || "Select Role"}
        </MenuButton>
        <MenuList minW="130px" p={0}>
          {isFilter && (
            <MenuItem
              onClick={() => {
                setSelectedRole("All");
                onChange("");
              }}
            >
              All
            </MenuItem>
          )}
          {filterOption?.map((option, idx) => (
            <MenuItem
              value={option.value}
              key={idx}
              onClick={() => {
                setSelectedRole(option.label);
                onChange(option.value);
              }}
              fontSize="14px"
            >
              {option.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </React.Fragment>
  );
};

export default CustomSelect;
