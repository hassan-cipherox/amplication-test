import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ItemAttributeResolverBase } from "./base/itemAttribute.resolver.base";
import { ItemAttribute } from "./base/ItemAttribute";
import { ItemAttributeService } from "./itemAttribute.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ItemAttribute)
export class ItemAttributeResolver extends ItemAttributeResolverBase {
  constructor(
    protected readonly service: ItemAttributeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
