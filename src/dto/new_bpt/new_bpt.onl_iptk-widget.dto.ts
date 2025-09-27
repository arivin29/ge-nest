import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIptkDto } from './new_bpt.onl_iptk.dto';

export class NewBptOnlIptkWidgetDto extends NewBptOnlIptkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
