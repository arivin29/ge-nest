import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSipeDto } from './new_bpt.onl_sipe.dto';

export class NewBptOnlSipeWidgetDto extends NewBptOnlSipeDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
