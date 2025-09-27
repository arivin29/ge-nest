import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOsspaudDto } from './new_bpt.onl_osspaud.dto';

export class NewBptOnlOsspaudWidgetDto extends NewBptOnlOsspaudDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
