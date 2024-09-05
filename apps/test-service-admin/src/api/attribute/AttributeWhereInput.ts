import { AttributeGroupListRelationFilter } from "../attributeGroup/AttributeGroupListRelationFilter";
import { ItemAttributeListRelationFilter } from "../itemAttribute/ItemAttributeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AttributeWhereInput = {
  AttributeGroups?: AttributeGroupListRelationFilter;
  ItemAttributes?: ItemAttributeListRelationFilter;
  id?: StringFilter;
  key?: StringNullableFilter;
  label?: StringNullableFilter;
  typeField?: "Text" | "Dropdown";
};
