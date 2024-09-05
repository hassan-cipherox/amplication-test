import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { Item } from "../item/Item";
import { AttributeWhereUniqueInput } from "../attribute/AttributeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ItemAttributeWhereInput = {
  Item?: ItemWhereUniqueInput;
  attribute?: AttributeWhereUniqueInput;
  id?: StringFilter;
  value?: StringNullableFilter;
};
