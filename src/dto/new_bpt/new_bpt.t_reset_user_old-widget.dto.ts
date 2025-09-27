import { ApiProperty } from '@nestjs/swagger';
import { NewBptTResetUserOldDto } from './new_bpt.t_reset_user_old.dto';

export class NewBptTResetUserOldWidgetDto extends NewBptTResetUserOldDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
