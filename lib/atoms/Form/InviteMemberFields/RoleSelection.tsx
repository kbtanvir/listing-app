import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { BsFillCaretDownFill } from "react-icons/bs";
import { DropdownOptions, FormField } from "../../../hooks/useHookForm";
import { styles } from "./styles";

export function RoleSelectionField({
  options,
  formKey,
  defaultValue,
}: {
  options: DropdownOptions;
  formKey: any;
  defaultValue?: string;
}) {
  const formService = useFormContext<FormField<any>>();

  useEffect(() => {
    if (defaultValue) {
      formService.setValue(formKey, defaultValue);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formKey, defaultValue]);

  return (
    <Menu>
      <>
        <MenuButton
          as={Button}
          rightIcon={
            <Box position={"relative"} right="-30px">
              <BsFillCaretDownFill size={"10px"} />
            </Box>
          }
          {...styles.roleSelectionButton}
        >
          {`${formService.watch(formKey as any) ?? "Select"}`}
        </MenuButton>
        <MenuList p="0">
          {options.map(option => (
            <MenuItem
              autoFocus={false}
              {...styles.menuItem}
              key={option.label}
              value={option.label}
              onClick={e => formService.setValue(formKey as any, option.value)}
              bg={
                formService.watch(formKey as any) === option.value
                  ? "gray.100"
                  : "white"
              }
            >
              {option.value}
            </MenuItem>
          ))}
        </MenuList>
      </>
    </Menu>
  );
}
