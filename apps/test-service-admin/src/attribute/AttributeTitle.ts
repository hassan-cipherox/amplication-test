import { Attribute as TAttribute } from "../api/attribute/Attribute";

export const ATTRIBUTE_TITLE_FIELD = "key";

export const AttributeTitle = (record: TAttribute): string => {
  return record.key?.toString() || String(record.id);
};
