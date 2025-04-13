import { ApiProperty } from '@nestjs/swagger';
import { AclUserGroupAccessDto } from './acl.user_group_access.dto';

export class AclUserGroupAccessWidgetDto extends AclUserGroupAccessDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
