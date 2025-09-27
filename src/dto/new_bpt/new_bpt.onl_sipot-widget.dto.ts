import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSipotDto } from './new_bpt.onl_sipot.dto';

export class NewBptOnlSipotWidgetDto extends NewBptOnlSipotDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
