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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { ItemAttributeListRelationFilter } from "../../itemAttribute/base/ItemAttributeListRelationFilter";
import { ItemTypeWhereUniqueInput } from "../../itemType/base/ItemTypeWhereUniqueInput";

@InputType()
class ItemWhereInput {
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
    type: () => ItemAttributeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ItemAttributeListRelationFilter)
  @IsOptional()
  @Field(() => ItemAttributeListRelationFilter, {
    nullable: true,
  })
  itemAttributes?: ItemAttributeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ItemTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ItemTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => ItemTypeWhereUniqueInput, {
    nullable: true,
  })
  itemType?: ItemTypeWhereUniqueInput;
}

export { ItemWhereInput as ItemWhereInput };