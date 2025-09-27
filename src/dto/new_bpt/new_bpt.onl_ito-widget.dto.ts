import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlItoDto } from './new_bpt.onl_ito.dto';

export class NewBptOnlItoWidgetDto extends NewBptOnlItoDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
