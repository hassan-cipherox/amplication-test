import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ItemAttributeService } from "./itemAttribute.service";
import { ItemAttributeControllerBase } from "./base/itemAttribute.controller.base";

@swagger.ApiTags("itemAttributes")
@common.Controller("itemAttributes")
export class ItemAttributeController extends ItemAttributeControllerBase {
  constructor(
    protected readonly service: ItemAttributeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
