import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FormField } from "../../../hooks/useHookForm";

export function PasswordField({ field }: { field: any }) {
  const formService = useFormContext<FormField<any>>();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <InputGroup size="md">
      <Input
        type={show ? "text" : "password"}
        autoComplete="on"
        {...formService.register(field.name)}
        placeholder={field.placeholder}
      />
      <InputRightElement width="3.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {!show ? <IoMdEye /> : <IoMdEyeOff />}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
