import { ItemAttribute } from "../itemAttribute/ItemAttribute";
import { ItemType } from "../itemType/ItemType";

export type Item = {
  createdAt: Date;
  id: string;
  itemAttributes?: Array<ItemAttribute>;
  itemType?: ItemType | null;
  updatedAt: Date;
};
