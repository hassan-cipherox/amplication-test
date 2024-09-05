import { Item } from "../item/Item";
import { Attribute } from "../attribute/Attribute";

export type ItemAttribute = {
  Item?: Item | null;
  attribute?: Attribute | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  value: string | null;
};
