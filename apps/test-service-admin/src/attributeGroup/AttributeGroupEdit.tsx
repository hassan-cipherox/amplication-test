import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ItemTypeTitle } from "../itemType/ItemTypeTitle";
import { AttributeTitle } from "../attribute/AttributeTitle";

export const AttributeGroupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="ItemTypes"
          reference="ItemType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ItemTypeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="attributes"
          reference="Attribute"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttributeTitle} />
        </ReferenceArrayInput>
        <TextInput label="label" source="label" />
      </SimpleForm>
    </Edit>
  );
};
