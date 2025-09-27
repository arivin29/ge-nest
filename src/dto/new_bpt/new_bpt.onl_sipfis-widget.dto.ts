import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSipfisDto } from './new_bpt.onl_sipfis.dto';

export class NewBptOnlSipfisWidgetDto extends NewBptOnlSipfisDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
