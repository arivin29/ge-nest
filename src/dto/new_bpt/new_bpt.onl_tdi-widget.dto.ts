import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlTdiDto } from './new_bpt.onl_tdi.dto';

export class NewBptOnlTdiWidgetDto extends NewBptOnlTdiDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
