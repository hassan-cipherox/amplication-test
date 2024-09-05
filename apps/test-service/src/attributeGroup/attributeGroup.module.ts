import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AttributeGroupModuleBase } from "./base/attributeGroup.module.base";
import { AttributeGroupService } from "./attributeGroup.service";
import { AttributeGroupController } from "./attributeGroup.controller";
import { AttributeGroupResolver } from "./attributeGroup.resolver";

@Module({
  imports: [AttributeGroupModuleBase, forwardRef(() => AuthModule)],
  controllers: [AttributeGroupController],
  providers: [AttributeGroupService, AttributeGroupResolver],
  exports: [AttributeGroupService],
})
export class AttributeGroupModule {}
