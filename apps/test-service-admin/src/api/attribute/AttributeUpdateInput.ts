import { AttributeGroupUpdateManyWithoutAttributesInput } from "./AttributeGroupUpdateManyWithoutAttributesInput";
import { ItemAttributeUpdateManyWithoutAttributesInput } from "./ItemAttributeUpdateManyWithoutAttributesInput";

export type AttributeUpdateInput = {
  AttributeGroups?: AttributeGroupUpdateManyWithoutAttributesInput;
  ItemAttributes?: ItemAttributeUpdateManyWithoutAttributesInput;
  key?: string | null;
  label?: string | null;
  typeField?: "Text" | "Dropdown";
};
