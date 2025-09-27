import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlTdpDto } from './new_bpt.onl_tdp.dto';

export class NewBptOnlTdpWidgetDto extends NewBptOnlTdpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
