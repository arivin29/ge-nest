import { ApiProperty } from '@nestjs/swagger';
import { AclUsersDto } from './acl.users.dto';

export class AclUsersWidgetDto extends AclUsersDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
