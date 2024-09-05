import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AttributeModuleBase } from "./base/attribute.module.base";
import { AttributeService } from "./attribute.service";
import { AttributeController } from "./attribute.controller";
import { AttributeResolver } from "./attribute.resolver";

@Module({
  imports: [AttributeModuleBase, forwardRef(() => AuthModule)],
  controllers: [AttributeController],
  providers: [AttributeService, AttributeResolver],
  exports: [AttributeService],
})
export class AttributeModule {}
