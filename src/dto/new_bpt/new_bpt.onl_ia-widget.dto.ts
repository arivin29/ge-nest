import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIaDto } from './new_bpt.onl_ia.dto';

export class NewBptOnlIaWidgetDto extends NewBptOnlIaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
