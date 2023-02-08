import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  StyleProps,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { BsFillCaretDownFill } from "react-icons/bs";
import { DropdownOptions, FormField } from "../../../hooks/useHookForm";
import { ButtonVariant } from "../../../theme/components/Button";

export function SelectDropdown({
  options,
  formKey,
  defaultValue,
  menuButtonStyle,
  dropdownWrapperStyle,
  dropdownItemStyle,
  onChange,
  placeHolder,
}: {
  options: DropdownOptions;
  formKey?: any;
  defaultValue?: string;
  menuButtonStyle?: StyleProps;
  dropdownWrapperStyle?: StyleProps;
  dropdownItemStyle?: StyleProps;
  onChange?: (e: any) => void;
  placeHolder?: string;
}) {
  const formService = useFormContext<FormField<any>>();
  const [value, setValue] = useState(options[0].value);

  useEffect(() => {
    if (defaultValue && formKey) {
      formService.setValue(formKey, defaultValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formKey, defaultValue]);

  function handleChange(value: any) {
    setValue(value);
    if (onChange) {
      onChange(value);
    }
  }

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsFillCaretDownFill />}
        variant={ButtonVariant.dropdownButton}
        minW="0"
        color={formKey && formService.watch(formKey) ? "gray.900" : "gray.400"}
        {...menuButtonStyle}
      >
        <Text fontSize="14px">
          {`${
            (formKey && formService.watch(formKey as any)) ||
            placeHolder ||
            value.toUpperCase()
          }`}
        </Text>
      </MenuButton>
      <MenuList
        py="0"
        boxShadow={"0px 4px 14px rgba(0, 0, 0, 0.25)"}
        {...dropdownWrapperStyle}
      >
        {options.map(option => (
          <MenuItem
            key={option.value}
            value={option.label}
            {...dropdownItemStyle}
            onClick={e => {
              formKey && formService.setValue(formKey as any, option.value);
              handleChange(option.value);
            }}
            bg={
              formKey && formService.watch(formKey as any) === option.value
                ? "gray.100"
                : "white"
            }
          >
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
