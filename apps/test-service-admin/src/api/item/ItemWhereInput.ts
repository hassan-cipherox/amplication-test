import { StringFilter } from "../../util/StringFilter";
import { ItemAttributeListRelationFilter } from "../itemAttribute/ItemAttributeListRelationFilter";
import { ItemTypeWhereUniqueInput } from "../itemType/ItemTypeWhereUniqueInput";

export type ItemWhereInput = {
  id?: StringFilter;
  itemAttributes?: ItemAttributeListRelationFilter;
  itemType?: ItemTypeWhereUniqueInput;
};
