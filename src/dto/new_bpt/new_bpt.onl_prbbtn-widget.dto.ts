import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlPrbbtnDto } from './new_bpt.onl_prbbtn.dto';

export class NewBptOnlPrbbtnWidgetDto extends NewBptOnlPrbbtnDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
