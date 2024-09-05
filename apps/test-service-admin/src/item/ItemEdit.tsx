import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ItemAttributeTitle } from "../itemAttribute/ItemAttributeTitle";
import { ItemTypeTitle } from "../itemType/ItemTypeTitle";

export const ItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="itemAttributes"
          reference="ItemAttribute"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ItemAttributeTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="itemType.id"
          reference="ItemType"
          label="ItemType"
        >
          <SelectInput optionText={ItemTypeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
