import { ItemTypeCreateNestedManyWithoutAttributeGroupsInput } from "./ItemTypeCreateNestedManyWithoutAttributeGroupsInput";
import { AttributeCreateNestedManyWithoutAttributeGroupsInput } from "./AttributeCreateNestedManyWithoutAttributeGroupsInput";

export type AttributeGroupCreateInput = {
  ItemTypes?: ItemTypeCreateNestedManyWithoutAttributeGroupsInput;
  attributes?: AttributeCreateNestedManyWithoutAttributeGroupsInput;
  label?: string | null;
};
