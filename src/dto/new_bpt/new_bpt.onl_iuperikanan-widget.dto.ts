import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIuperikananDto } from './new_bpt.onl_iuperikanan.dto';

export class NewBptOnlIuperikananWidgetDto extends NewBptOnlIuperikananDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
