import { ItemTypeListRelationFilter } from "../itemType/ItemTypeListRelationFilter";
import { AttributeListRelationFilter } from "../attribute/AttributeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AttributeGroupWhereInput = {
  ItemTypes?: ItemTypeListRelationFilter;
  attributes?: AttributeListRelationFilter;
  id?: StringFilter;
  label?: StringNullableFilter;
};
