import { ApiProperty } from '@nestjs/swagger';
import { NewBptPasswordResetsDto } from './new_bpt.password_resets.dto';

export class NewBptPasswordResetsWidgetDto extends NewBptPasswordResetsDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
