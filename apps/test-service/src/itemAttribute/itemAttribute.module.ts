import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ItemAttributeModuleBase } from "./base/itemAttribute.module.base";
import { ItemAttributeService } from "./itemAttribute.service";
import { ItemAttributeController } from "./itemAttribute.controller";
import { ItemAttributeResolver } from "./itemAttribute.resolver";

@Module({
  imports: [ItemAttributeModuleBase, forwardRef(() => AuthModule)],
  controllers: [ItemAttributeController],
  providers: [ItemAttributeService, ItemAttributeResolver],
  exports: [ItemAttributeService],
})
export class ItemAttributeModule {}
