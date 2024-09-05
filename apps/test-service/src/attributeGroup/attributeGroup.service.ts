import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AttributeGroupServiceBase } from "./base/attributeGroup.service.base";

@Injectable()
export class AttributeGroupService extends AttributeGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
