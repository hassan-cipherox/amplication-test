import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItemAttributeServiceBase } from "./base/itemAttribute.service.base";

@Injectable()
export class ItemAttributeService extends ItemAttributeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
