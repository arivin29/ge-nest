import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIpprDto } from './new_bpt.onl_ippr.dto';

export class NewBptOnlIpprWidgetDto extends NewBptOnlIpprDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
