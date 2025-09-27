import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIpscDto } from './new_bpt.onl_ipsc.dto';

export class NewBptOnlIpscWidgetDto extends NewBptOnlIpscDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
