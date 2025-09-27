import { ApiProperty } from '@nestjs/swagger';
import { NewBptTRequestUserDto } from './new_bpt.t_request_user.dto';

export class NewBptTRequestUserWidgetDto extends NewBptTRequestUserDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
