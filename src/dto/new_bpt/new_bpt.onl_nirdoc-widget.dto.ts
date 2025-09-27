import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNirdocDto } from './new_bpt.onl_nirdoc.dto';

export class NewBptOnlNirdocWidgetDto extends NewBptOnlNirdocDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
