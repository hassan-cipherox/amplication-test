import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ITEM_TITLE_FIELD } from "./ItemTitle";
import { ATTRIBUTE_TITLE_FIELD } from "../attribute/AttributeTitle";
import { ITEMTYPE_TITLE_FIELD } from "../itemType/ItemTypeTitle";

export const ItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="ItemType"
          source="itemtype.id"
          reference="ItemType"
        >
          <TextField source={ITEMTYPE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ItemAttribute"
          target="ItemId"
          label="ItemAttributes"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Item" source="item.id" reference="Item">
              <TextField source={ITEM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Attribute"
              source="attribute.id"
              reference="Attribute"
            >
              <TextField source={ATTRIBUTE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="value" source="value" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
