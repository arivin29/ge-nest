import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIutmDto } from './new_bpt.onl_iutm.dto';

export class NewBptOnlIutmWidgetDto extends NewBptOnlIutmDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
