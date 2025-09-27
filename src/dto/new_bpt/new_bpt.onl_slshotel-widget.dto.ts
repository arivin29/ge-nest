import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSlshotelDto } from './new_bpt.onl_slshotel.dto';

export class NewBptOnlSlshotelWidgetDto extends NewBptOnlSlshotelDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
