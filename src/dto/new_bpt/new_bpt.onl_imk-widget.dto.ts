import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlImkDto } from './new_bpt.onl_imk.dto';

export class NewBptOnlImkWidgetDto extends NewBptOnlImkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
