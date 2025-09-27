import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlRmrDto } from './new_bpt.onl_rmr.dto';

export class NewBptOnlRmrWidgetDto extends NewBptOnlRmrDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
