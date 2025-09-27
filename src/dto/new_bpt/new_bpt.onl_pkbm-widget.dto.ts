import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlPkbmDto } from './new_bpt.onl_pkbm.dto';

export class NewBptOnlPkbmWidgetDto extends NewBptOnlPkbmDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
