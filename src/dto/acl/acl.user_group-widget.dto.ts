import { ApiProperty } from '@nestjs/swagger';
import { AclUserGroupDto } from './acl.user_group.dto';

export class AclUserGroupWidgetDto extends AclUserGroupDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
