import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOsstdupDto } from './new_bpt.onl_osstdup.dto';

export class NewBptOnlOsstdupWidgetDto extends NewBptOnlOsstdupDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
