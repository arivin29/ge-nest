import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlTdpkpDto } from './new_bpt.onl_tdpkp.dto';

export class NewBptOnlTdpkpWidgetDto extends NewBptOnlTdpkpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
