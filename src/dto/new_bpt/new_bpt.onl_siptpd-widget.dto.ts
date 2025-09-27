import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSiptpdDto } from './new_bpt.onl_siptpd.dto';

export class NewBptOnlSiptpdWidgetDto extends NewBptOnlSiptpdDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
