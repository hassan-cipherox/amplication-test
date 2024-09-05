import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AttributeGroupService } from "./attributeGroup.service";
import { AttributeGroupControllerBase } from "./base/attributeGroup.controller.base";

@swagger.ApiTags("attributeGroups")
@common.Controller("attributeGroups")
export class AttributeGroupController extends AttributeGroupControllerBase {
  constructor(
    protected readonly service: AttributeGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
