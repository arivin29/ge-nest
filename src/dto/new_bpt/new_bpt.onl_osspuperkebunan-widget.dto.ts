import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOsspuperkebunanDto } from './new_bpt.onl_osspuperkebunan.dto';

export class NewBptOnlOsspuperkebunanWidgetDto extends NewBptOnlOsspuperkebunanDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
