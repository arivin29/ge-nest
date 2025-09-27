import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIkrgDto } from './new_bpt.onl_ikrg.dto';

export class NewBptOnlIkrgWidgetDto extends NewBptOnlIkrgDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
