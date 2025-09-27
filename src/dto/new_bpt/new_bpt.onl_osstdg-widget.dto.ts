import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOsstdgDto } from './new_bpt.onl_osstdg.dto';

export class NewBptOnlOsstdgWidgetDto extends NewBptOnlOsstdgDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
