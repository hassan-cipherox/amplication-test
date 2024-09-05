import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ItemTitle } from "../item/ItemTitle";
import { AttributeTitle } from "../attribute/AttributeTitle";

export const ItemAttributeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="Item.id" reference="Item" label="Item">
          <SelectInput optionText={ItemTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="attribute.id"
          reference="Attribute"
          label="Attribute"
        >
          <SelectInput optionText={AttributeTitle} />
        </ReferenceInput>
        <TextInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
