import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlArsipDto } from './new_bpt.onl_arsip.dto';

export class NewBptOnlArsipWidgetDto extends NewBptOnlArsipDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
