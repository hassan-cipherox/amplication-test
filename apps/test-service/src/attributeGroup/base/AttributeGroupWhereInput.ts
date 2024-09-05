/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ItemTypeListRelationFilter } from "../../itemType/base/ItemTypeListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { AttributeListRelationFilter } from "../../attribute/base/AttributeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

@InputType()
class AttributeGroupWhereInput {
  @ApiProperty({
    required: false,
    type: () => ItemTypeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ItemTypeListRelationFilter)
  @IsOptional()
  @Field(() => ItemTypeListRelationFilter, {
    nullable: true,
  })
  ItemTypes?: ItemTypeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => AttributeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AttributeListRelationFilter)
  @IsOptional()
  @Field(() => AttributeListRelationFilter, {
    nullable: true,
  })
  attributes?: AttributeListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  label?: StringNullableFilter;
}

export { AttributeGroupWhereInput as AttributeGroupWhereInput };
