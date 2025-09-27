import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOsspkbmDto } from './new_bpt.onl_osspkbm.dto';

export class NewBptOnlOsspkbmWidgetDto extends NewBptOnlOsspkbmDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
