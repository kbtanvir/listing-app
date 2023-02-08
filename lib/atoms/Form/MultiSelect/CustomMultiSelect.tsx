/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Tag } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { MultiSelect } from "react-multi-select-component";
import { DropdownOptions, FormField } from "../../../hooks/useHookForm";

type CustomSelectProps = {
  formKey: any;
  options?: DropdownOptions;
};

export default function CustomMultiSelect({
  formKey,
  options,
}: CustomSelectProps) {
  const formService = useFormContext<FormField<any>>();
  const [selectedRoles, setSelectedRole] = useState<DropdownOptions>([]);

  useEffect(() => {
    const defaultValue = formService.watch(formKey);
    if (defaultValue) setSelectedRole(defaultValue);
  }, [formKey, formService.watch(formKey)]);

  return (
    <Box position={"relative"} maxW="490px">
      {/* {selectedRoles?.length > 0 && (
        <HStack
          gap="2"
          {...{
            border: "1px solid #e0e0e0",
            overflowY: "scroll",
            h: "200px",
            p: "4",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          {selectedRoles?.map((role, idx) => (
            <Tag
              key={idx}
              borderRadius="full"
              variant="solid"
              bg="gray.200"
              color={"gray.700"}
              px="4"
              py="2"
            >
              <Text fontSize="14px" fontWeight={"bold"}>
                {role.value.slice(0, 10) + "..."}
              </Text>
              <TagCloseButton
                onClick={() => {
                  formService.setValue(formKey, [
                    ...selectedRoles.filter(item => item.value !== role.value),
                  ]);
                }}
              />
            </Tag>
          ))}
        </HStack>
      )} */}
      {options && (
        <MultiSelect
          options={options}
          value={selectedRoles}
          onChange={(selected: DropdownOptions) => {
            formService.setValue(formKey, selected);
            setSelectedRole(selected);
          }}
          valueRenderer={selected => {
            return selected.map(item => (
              <Tag key={item.value} mr="10px">
                {item.label.length > 6
                  ? item.label.slice(0, 6) + "..."
                  : item.label}
              </Tag>
            ));
          }}
          labelledBy="Select"
        />
      )}
    </Box>
  );
}
