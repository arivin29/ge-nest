import { ApiProperty } from '@nestjs/swagger';
import { AclUsersDto } from './acl.users.dto';
import { AclUserGroupDto } from './acl.user_group.dto';

export class AclUsersReportDto extends AclUsersDto {
  @ApiProperty({ type: AclUserGroupDto })
  userGroup: AclUserGroupDto;
}
