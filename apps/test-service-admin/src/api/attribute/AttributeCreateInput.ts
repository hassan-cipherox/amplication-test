import { AttributeGroupCreateNestedManyWithoutAttributesInput } from "./AttributeGroupCreateNestedManyWithoutAttributesInput";
import { ItemAttributeCreateNestedManyWithoutAttributesInput } from "./ItemAttributeCreateNestedManyWithoutAttributesInput";

export type AttributeCreateInput = {
  AttributeGroups?: AttributeGroupCreateNestedManyWithoutAttributesInput;
  ItemAttributes?: ItemAttributeCreateNestedManyWithoutAttributesInput;
  key?: string | null;
  label?: string | null;
  typeField: "Text" | "Dropdown";
};
