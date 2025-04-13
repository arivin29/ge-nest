import { ApiProperty } from '@nestjs/swagger';
import { AclUserGroupAccessDto } from './acl.user_group_access.dto';
import { AclModuleDto } from './acl.module.dto';

export class AclUserGroupAccessReportDto extends AclUserGroupAccessDto {
  @ApiProperty({ type: AclModuleDto })
  module: AclModuleDto;
}
