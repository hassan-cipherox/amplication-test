/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Attribute } from "./Attribute";
import { AttributeCountArgs } from "./AttributeCountArgs";
import { AttributeFindManyArgs } from "./AttributeFindManyArgs";
import { AttributeFindUniqueArgs } from "./AttributeFindUniqueArgs";
import { CreateAttributeArgs } from "./CreateAttributeArgs";
import { UpdateAttributeArgs } from "./UpdateAttributeArgs";
import { DeleteAttributeArgs } from "./DeleteAttributeArgs";
import { AttributeGroupFindManyArgs } from "../../attributeGroup/base/AttributeGroupFindManyArgs";
import { AttributeGroup } from "../../attributeGroup/base/AttributeGroup";
import { ItemAttributeFindManyArgs } from "../../itemAttribute/base/ItemAttributeFindManyArgs";
import { ItemAttribute } from "../../itemAttribute/base/ItemAttribute";
import { AttributeService } from "../attribute.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Attribute)
export class AttributeResolverBase {
  constructor(
    protected readonly service: AttributeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Attribute",
    action: "read",
    possession: "any",
  })
  async _attributesMeta(
    @graphql.Args() args: AttributeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Attribute])
  @nestAccessControl.UseRoles({
    resource: "Attribute",
    action: "read",
    possession: "any",
  })
  async attributes(
    @graphql.Args() args: AttributeFindManyArgs
  ): Promise<Attribute[]> {
    return this.service.attributes(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Attribute, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Attribute",
    action: "read",
    possession: "own",
  })
  async attribute(
    @graphql.Args() args: AttributeFindUniqueArgs
  ): Promise<Attribute | null> {
    const result = await this.service.attribute(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Attribute)
  @nestAccessControl.UseRoles({
    resource: "Attribute",
    action: "create",
    possession: "any",
  })
  async createAttribute(
    @graphql.Args() args: CreateAttributeArgs
  ): Promise<Attribute> {
    return await this.service.createAttribute({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Attribute)
  @nestAccessControl.UseRoles({
    resource: "Attribute",
    action: "update",
    possession: "any",
  })
  async updateAttribute(
    @graphql.Args() args: UpdateAttributeArgs
  ): Promise<Attribute | null> {
    try {
      return await this.service.updateAttribute({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Attribute)
  @nestAccessControl.UseRoles({
    resource: "Attribute",
    action: "delete",
    possession: "any",
  })
  async deleteAttribute(
    @graphql.Args() args: DeleteAttributeArgs
  ): Promise<Attribute | null> {
    try {
      return await this.service.deleteAttribute(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [AttributeGroup], { name: "attributeGroups" })
  @nestAccessControl.UseRoles({
    resource: "AttributeGroup",
    action: "read",
    possession: "any",
  })
  async findAttributeGroups(
    @graphql.Parent() parent: Attribute,
    @graphql.Args() args: AttributeGroupFindManyArgs
  ): Promise<AttributeGroup[]> {
    const results = await this.service.findAttributeGroups(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ItemAttribute], { name: "itemAttributes" })
  @nestAccessControl.UseRoles({
    resource: "ItemAttribute",
    action: "read",
    possession: "any",
  })
  async findItemAttributes(
    @graphql.Parent() parent: Attribute,
    @graphql.Args() args: ItemAttributeFindManyArgs
  ): Promise<ItemAttribute[]> {
    const results = await this.service.findItemAttributes(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}