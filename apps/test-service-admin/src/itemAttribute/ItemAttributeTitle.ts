import { ItemAttribute as TItemAttribute } from "../api/itemAttribute/ItemAttribute";

export const ITEMATTRIBUTE_TITLE_FIELD = "value";

export const ItemAttributeTitle = (record: TItemAttribute): string => {
  return record.value?.toString() || String(record.id);
};
