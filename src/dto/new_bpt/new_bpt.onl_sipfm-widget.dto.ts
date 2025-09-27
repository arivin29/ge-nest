import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSipfmDto } from './new_bpt.onl_sipfm.dto';

export class NewBptOnlSipfmWidgetDto extends NewBptOnlSipfmDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
