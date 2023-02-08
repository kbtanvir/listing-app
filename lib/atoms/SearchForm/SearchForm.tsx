import { Input, InputGroup, InputLeftElement, VStack } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import debounce from "lodash.debounce";
import { FormProvider, useForm } from "react-hook-form";
import { SearchIcon } from "../../../features/common/CustomIcons";
import { InputVariant } from "../../theme/components/Input";

export function SearchForm({
  mutationKey,
  queryCallback,
  variant,
  placeholder,
}: {
  mutationKey: string;
  queryCallback: (query: any) => Promise<any>;
  variant: InputVariant;
  placeholder?: string;
}) {
  const formService = useForm();
  const mutation = useMutation([mutationKey], (query: string) =>
    queryCallback(query)
  );

  const debouncedChangeHandler = debounce(e => {
    mutation.mutate(e.target.value);
  }, 500);

  return (
    <FormProvider {...formService}>
      <VStack as={"form"} w="full" m="0 !important" zIndex={0}>
        <InputGroup h="48px" maxW="420px" w="full">
          <Input
            _placeholder={{ color: "gray.600", fontWeight: "200" }}
            onChange={debouncedChangeHandler}
            variant={variant}
            placeholder={placeholder || "Search"}
          />
          <InputLeftElement left="12px" p="0">
            <SearchIcon />
          </InputLeftElement>
        </InputGroup>
      </VStack>
    </FormProvider>
  );
}
