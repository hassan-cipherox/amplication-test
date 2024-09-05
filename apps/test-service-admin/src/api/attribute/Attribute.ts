import { AttributeGroup } from "../attributeGroup/AttributeGroup";
import { ItemAttribute } from "../itemAttribute/ItemAttribute";

export type Attribute = {
  AttributeGroups?: Array<AttributeGroup>;
  ItemAttributes?: Array<ItemAttribute>;
  createdAt: Date;
  id: string;
  key: string | null;
  label: string | null;
  typeField?: "Text" | "Dropdown";
  updatedAt: Date;
};
