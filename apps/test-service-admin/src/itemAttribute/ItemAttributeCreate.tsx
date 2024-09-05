import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ItemTitle } from "../item/ItemTitle";
import { AttributeTitle } from "../attribute/AttributeTitle";

export const ItemAttributeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
