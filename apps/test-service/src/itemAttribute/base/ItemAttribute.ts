/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Item } from "../../item/base/Item";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { Attribute } from "../../attribute/base/Attribute";

@ObjectType()
class ItemAttribute {
  @ApiProperty({
    required: false,
    type: () => Item,
  })
  @ValidateNested()
  @Type(() => Item)
  @IsOptional()
  Item?: Item | null;

  @ApiProperty({
    required: false,
    type: () => Attribute,
  })
  @ValidateNested()
  @Type(() => Attribute)
  @IsOptional()
  attribute?: Attribute | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  value!: string | null;
}

export { ItemAttribute as ItemAttribute };
