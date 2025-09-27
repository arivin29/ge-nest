import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNippjhDto } from './new_bpt.onl_nippjh.dto';

export class NewBptOnlNippjhWidgetDto extends NewBptOnlNippjhDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
