import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  SelectInput,
} from "react-admin";

import { AttributeGroupTitle } from "../attributeGroup/AttributeGroupTitle";
import { ItemAttributeTitle } from "../itemAttribute/ItemAttributeTitle";

export const AttributeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="AttributeGroups"
          reference="AttributeGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttributeGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="ItemAttributes"
          reference="ItemAttribute"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ItemAttributeTitle} />
        </ReferenceArrayInput>
        <TextInput label="key" source="key" />
        <TextInput label="label" source="label" />
        <SelectInput
          source="typeField"
          label="type"
          choices={[
            { label: "text", value: "Text" },
            { label: "dropdown", value: "Dropdown" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
