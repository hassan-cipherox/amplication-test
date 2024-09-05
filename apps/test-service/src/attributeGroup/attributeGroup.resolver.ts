import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AttributeGroupResolverBase } from "./base/attributeGroup.resolver.base";
import { AttributeGroup } from "./base/AttributeGroup";
import { AttributeGroupService } from "./attributeGroup.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AttributeGroup)
export class AttributeGroupResolver extends AttributeGroupResolverBase {
  constructor(
    protected readonly service: AttributeGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
