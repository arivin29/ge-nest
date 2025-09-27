import { ApiProperty } from '@nestjs/swagger';
import { NewBptTResetUserDto } from './new_bpt.t_reset_user.dto';

export class NewBptTResetUserWidgetDto extends NewBptTResetUserDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
