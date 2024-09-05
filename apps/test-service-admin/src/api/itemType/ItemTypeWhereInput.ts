import { AttributeGroupListRelationFilter } from "../attributeGroup/AttributeGroupListRelationFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ItemTypeWhereInput = {
  AttributeGroups?: AttributeGroupListRelationFilter;
  Items?: ItemListRelationFilter;
  id?: StringFilter;
  label?: StringNullableFilter;
};
