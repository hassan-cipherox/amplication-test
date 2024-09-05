import { AttributeGroupUpdateManyWithoutItemTypesInput } from "./AttributeGroupUpdateManyWithoutItemTypesInput";
import { ItemUpdateManyWithoutItemTypesInput } from "./ItemUpdateManyWithoutItemTypesInput";

export type ItemTypeUpdateInput = {
  AttributeGroups?: AttributeGroupUpdateManyWithoutItemTypesInput;
  Items?: ItemUpdateManyWithoutItemTypesInput;
  label?: string | null;
};
