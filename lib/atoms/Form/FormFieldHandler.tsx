import { Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FormField } from "../../hooks/useHookForm";

import { CheckboxField } from "./CheckboxField/CheckboxField";
import FieldError from "./FieldError/FieldError";
import { FileUploadField } from "./FileUploadField/FileUpload";
import { ImageUploadField } from "./ImageUploadField/ImageUploadField";
import { InviteMemberFields } from "./InviteMemberFields/InviteMemberFields";
import { MetaFields } from "./MetaFields/MetaFields";
import CustomMultiSelect from "./MultiSelect/CustomMultiSelect";
import { NumberField } from "./NumberField/NumberField";
import { PasswordField } from "./PasswordField/PasswordField";
import { PincodeField } from "./PinCodeField/PincodeField";
import { RadioField } from "./RadioField/RadioField";
import { SelectDropdown } from "./SelectDropdown/SelectDropdown";
import { TextAreaField } from "./TextAreaField/TextAreaField";
import { TextField } from "./TextField/TextField";

export const FieldWrapper = ({
  children,
  field,
}: {
  children: ReactNode;
  field: FormField<any>;
}) => {
  return (
    <Stack width="full" gap="12px">
      <Text variant={"label"} color={"gray.900"}>
        {field.label}
      </Text>
      {children}
      <FieldError name={field.name} />
    </Stack>
  );
};

export function FormFieldHandler({ field }: { field: FormField<any> }) {
  if (field.type === "password") {
    return (
      <FieldWrapper field={field}>
        <PasswordField field={field} />
      </FieldWrapper>
    );
  }
  if (["text", "email"].includes(field.type)) {
    return (
      <FieldWrapper field={field}>
        <TextField field={field} />
      </FieldWrapper>
    );
  }
  if (field.type === "number") {
    return (
      <FieldWrapper field={field}>
        <NumberField field={field} />
      </FieldWrapper>
    );
  }
  if (field.type === "radio") {
    return (
      <FieldWrapper field={field}>
        <RadioField field={field} />
      </FieldWrapper>
    );
  }
  if (field.type === "pincode") {
    return (
      <FieldWrapper field={field}>
        <PincodeField field={field} />
      </FieldWrapper>
    );
  }
  if (field.type === "textarea") {
    return (
      <FieldWrapper field={field}>
        <TextAreaField field={field} />
      </FieldWrapper>
    );
  }
  if (field.type === "select-dropdown") {
    return (
      <FieldWrapper field={field}>
        <SelectDropdown
          formKey={field.name}
          options={field.options as any}
          defaultValue={field.defaultValue as any}
          placeHolder={field.placeholder}
        />
      </FieldWrapper>
    );
  }
  if (field.type === "multi-select-dropdown") {
    return (
      <FieldWrapper field={field}>
        <CustomMultiSelect
          formKey={field.name}
          options={field.options as any}
        />
      </FieldWrapper>
    );
  }
  if (field.type === "file-upload") {
    return (
      <FieldWrapper field={field}>
        <FileUploadField field={field} />
      </FieldWrapper>
    );
  }
  if (field.type === "image-upload") {
    return (
      <FieldWrapper field={field}>
        <ImageUploadField field={field} />
      </FieldWrapper>
    );
  }
  if (field.type === "meta-fields") {
    return (
      <FieldWrapper field={field}>
        <MetaFields field={field} />
      </FieldWrapper>
    );
  }
  if (field.type === "checkbox") {
    return (
      <FieldWrapper field={field}>
        <CheckboxField field={field} />
      </FieldWrapper>
    );
  }
  if (field.type === "html") {
    return <>{field.html}</>;
  }
  if (field.type === "invite-fields") {
    return <InviteMemberFields field={field} />;
  }
  return <div>Not implemented</div>;
}
