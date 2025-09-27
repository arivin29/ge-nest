import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOsspupeternakanDto } from './new_bpt.onl_osspupeternakan.dto';

export class NewBptOnlOsspupeternakanWidgetDto extends NewBptOnlOsspupeternakanDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
