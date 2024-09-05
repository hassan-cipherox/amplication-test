import { ItemAttributeWhereInput } from "./ItemAttributeWhereInput";
import { ItemAttributeOrderByInput } from "./ItemAttributeOrderByInput";

export type ItemAttributeFindManyArgs = {
  where?: ItemAttributeWhereInput;
  orderBy?: Array<ItemAttributeOrderByInput>;
  skip?: number;
  take?: number;
};
