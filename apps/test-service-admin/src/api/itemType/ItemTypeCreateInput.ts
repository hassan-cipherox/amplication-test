import { AttributeGroupCreateNestedManyWithoutItemTypesInput } from "./AttributeGroupCreateNestedManyWithoutItemTypesInput";
import { ItemCreateNestedManyWithoutItemTypesInput } from "./ItemCreateNestedManyWithoutItemTypesInput";

export type ItemTypeCreateInput = {
  AttributeGroups?: AttributeGroupCreateNestedManyWithoutItemTypesInput;
  Items?: ItemCreateNestedManyWithoutItemTypesInput;
  label?: string | null;
};
