import { AttributeGroup as TAttributeGroup } from "../api/attributeGroup/AttributeGroup";

export const ATTRIBUTEGROUP_TITLE_FIELD = "label";

export const AttributeGroupTitle = (record: TAttributeGroup): string => {
  return record.label?.toString() || String(record.id);
};
