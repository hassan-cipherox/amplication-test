import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  itemTypeId?: SortOrder;
  updatedAt?: SortOrder;
};
