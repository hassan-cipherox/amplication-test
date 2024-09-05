import { AttributeGroup } from "../attributeGroup/AttributeGroup";
import { Item } from "../item/Item";

export type ItemType = {
  AttributeGroups?: Array<AttributeGroup>;
  Items?: Array<Item>;
  createdAt: Date;
  id: string;
  label: string | null;
  updatedAt: Date;
};
