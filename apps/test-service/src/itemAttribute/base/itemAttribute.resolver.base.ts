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
import { ItemAttribute } from "./ItemAttribute";
import { ItemAttributeCountArgs } from "./ItemAttributeCountArgs";
import { ItemAttributeFindManyArgs } from "./ItemAttributeFindManyArgs";
import { ItemAttributeFindUniqueArgs } from "./ItemAttributeFindUniqueArgs";
import { CreateItemAttributeArgs } from "./CreateItemAttributeArgs";
import { Item } from "../../item/base/Item";
import { UpdateItemAttributeArgs } from "./UpdateItemAttributeArgs";
import { DeleteItemAttributeArgs } from "./DeleteItemAttributeArgs";
import { Attribute } from "../../attribute/base/Attribute";
import { ItemAttributeService } from "../itemAttribute.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ItemAttribute)
export class ItemAttributeResolverBase {
  constructor(
    protected readonly service: ItemAttributeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ItemAttribute",
    action: "read",
    possession: "any",
  })
  async _itemAttributesMeta(
    @graphql.Args() args: ItemAttributeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ItemAttribute])
  @nestAccessControl.UseRoles({
    resource: "ItemAttribute",
    action: "read",
    possession: "any",
  })
  async itemAttributes(
    @graphql.Args() args: ItemAttributeFindManyArgs
  ): Promise<ItemAttribute[]> {
    return this.service.itemAttributes(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ItemAttribute, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ItemAttribute",
    action: "read",
    possession: "own",
  })
  async itemAttribute(
    @graphql.Args() args: ItemAttributeFindUniqueArgs
  ): Promise<ItemAttribute | null> {
    const result = await this.service.itemAttribute(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ItemAttribute)
  @nestAccessControl.UseRoles({
    resource: "ItemAttribute",
    action: "create",
    possession: "any",
  })
  async createItemAttribute(
    @graphql.Args() args: CreateItemAttributeArgs
  ): Promise<ItemAttribute> {
    return await this.service.createItemAttribute({
      ...args,
      data: {
        ...args.data,

        Item: args.data.Item
          ? {
              connect: args.data.Item,
            }
          : undefined,

        attribute: args.data.attribute
          ? {
              connect: args.data.attribute,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ItemAttribute)
  @nestAccessControl.UseRoles({
    resource: "ItemAttribute",
    action: "update",
    possession: "any",
  })
  async updateItemAttribute(
    @graphql.Args() args: UpdateItemAttributeArgs
  ): Promise<ItemAttribute | null> {
    try {
      return await this.service.updateItemAttribute({
        ...args,
        data: {
          ...args.data,

          Item: args.data.Item
            ? {
                connect: args.data.Item,
              }
            : undefined,

          attribute: args.data.attribute
            ? {
                connect: args.data.attribute,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => ItemAttribute)
  @nestAccessControl.UseRoles({
    resource: "ItemAttribute",
    action: "delete",
    possession: "any",
  })
  async deleteItemAttribute(
    @graphql.Args() args: DeleteItemAttributeArgs
  ): Promise<ItemAttribute | null> {
    try {
      return await this.service.deleteItemAttribute(args);
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
  @graphql.ResolveField(() => Item, {
    nullable: true,
    name: "item",
  })
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "read",
    possession: "any",
  })
  async getItem(@graphql.Parent() parent: ItemAttribute): Promise<Item | null> {
    const result = await this.service.getItem(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Attribute, {
    nullable: true,
    name: "attribute",
  })
  @nestAccessControl.UseRoles({
    resource: "Attribute",
    action: "read",
    possession: "any",
  })
  async getAttribute(
    @graphql.Parent() parent: ItemAttribute
  ): Promise<Attribute | null> {
    const result = await this.service.getAttribute(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
