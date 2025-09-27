import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSlskantinDto } from './new_bpt.onl_slskantin.dto';

export class NewBptOnlSlskantinWidgetDto extends NewBptOnlSlskantinDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
