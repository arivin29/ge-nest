import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlKrkDto } from './new_bpt.onl_krk.dto';

export class NewBptOnlKrkWidgetDto extends NewBptOnlKrkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
