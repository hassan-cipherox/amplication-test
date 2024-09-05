import { ItemAttributeCreateNestedManyWithoutItemsInput } from "./ItemAttributeCreateNestedManyWithoutItemsInput";
import { ItemTypeWhereUniqueInput } from "../itemType/ItemTypeWhereUniqueInput";

export type ItemCreateInput = {
  itemAttributes?: ItemAttributeCreateNestedManyWithoutItemsInput;
  itemType?: ItemTypeWhereUniqueInput | null;
};
