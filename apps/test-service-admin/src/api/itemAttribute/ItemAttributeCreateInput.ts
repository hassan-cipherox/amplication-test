import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { Item } from "../item/Item";
import { AttributeWhereUniqueInput } from "../attribute/AttributeWhereUniqueInput";

export type ItemAttributeCreateInput = {
  Item?: ItemWhereUniqueInput | null;
  attribute?: AttributeWhereUniqueInput | null;
  value?: string | null;
};
