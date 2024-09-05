import { ItemType } from "../itemType/ItemType";
import { Attribute } from "../attribute/Attribute";

export type AttributeGroup = {
  ItemTypes?: Array<ItemType>;
  attributes?: Array<Attribute>;
  createdAt: Date;
  id: string;
  label: string | null;
  updatedAt: Date;
};
