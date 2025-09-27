import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOsstdphpDto } from './new_bpt.onl_osstdphp.dto';

export class NewBptOnlOsstdphpWidgetDto extends NewBptOnlOsstdphpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
