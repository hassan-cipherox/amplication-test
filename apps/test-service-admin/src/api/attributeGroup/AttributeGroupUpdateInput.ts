import { ItemTypeUpdateManyWithoutAttributeGroupsInput } from "./ItemTypeUpdateManyWithoutAttributeGroupsInput";
import { AttributeUpdateManyWithoutAttributeGroupsInput } from "./AttributeUpdateManyWithoutAttributeGroupsInput";

export type AttributeGroupUpdateInput = {
  ItemTypes?: ItemTypeUpdateManyWithoutAttributeGroupsInput;
  attributes?: AttributeUpdateManyWithoutAttributeGroupsInput;
  label?: string | null;
};
