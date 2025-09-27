import { ApiProperty } from '@nestjs/swagger';
import { NewBptUsersDto } from './new_bpt.users.dto';

export class NewBptUsersWidgetDto extends NewBptUsersDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
