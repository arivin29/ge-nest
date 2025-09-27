import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIptktDto } from './new_bpt.onl_iptkt.dto';

export class NewBptOnlIptktWidgetDto extends NewBptOnlIptktDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
