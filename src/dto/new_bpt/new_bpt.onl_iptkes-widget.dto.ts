import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIptkesDto } from './new_bpt.onl_iptkes.dto';

export class NewBptOnlIptkesWidgetDto extends NewBptOnlIptkesDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
