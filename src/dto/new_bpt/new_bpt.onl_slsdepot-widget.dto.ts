import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSlsdepotDto } from './new_bpt.onl_slsdepot.dto';

export class NewBptOnlSlsdepotWidgetDto extends NewBptOnlSlsdepotDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
