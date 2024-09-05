import { ItemAttributeUpdateManyWithoutItemsInput } from "./ItemAttributeUpdateManyWithoutItemsInput";
import { ItemTypeWhereUniqueInput } from "../itemType/ItemTypeWhereUniqueInput";

export type ItemUpdateInput = {
  itemAttributes?: ItemAttributeUpdateManyWithoutItemsInput;
  itemType?: ItemTypeWhereUniqueInput | null;
};
