import { Select } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { colors } from "../../theme/consts/colors.const";

export default function CustomSelect({
  options,
  name,
}: {
  options: any[];
  name: any;
}) {
  const formService = useFormContext();
  return (
    <Select
      position="relative"
      placeholder="Select country"
      defaultValue={"select country"}
      top="8px"
      boxShadow={"2px 2px 10px #eee"}
      display={"block"}
      size="lg"
      // h="54"
      bg={colors.lightGray}
      title="select countries"
      {...formService.register(name)}
    >
      {options?.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
}
