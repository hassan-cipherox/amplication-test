import { AttributeGroupWhereInput } from "./AttributeGroupWhereInput";
import { AttributeGroupOrderByInput } from "./AttributeGroupOrderByInput";

export type AttributeGroupFindManyArgs = {
  where?: AttributeGroupWhereInput;
  orderBy?: Array<AttributeGroupOrderByInput>;
  skip?: number;
  take?: number;
};
