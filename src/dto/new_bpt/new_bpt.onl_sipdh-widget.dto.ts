import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSipdhDto } from './new_bpt.onl_sipdh.dto';

export class NewBptOnlSipdhWidgetDto extends NewBptOnlSipdhDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
