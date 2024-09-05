import { ItemType as TItemType } from "../api/itemType/ItemType";

export const ITEMTYPE_TITLE_FIELD = "label";

export const ItemTypeTitle = (record: TItemType): string => {
  return record.label?.toString() || String(record.id);
};
