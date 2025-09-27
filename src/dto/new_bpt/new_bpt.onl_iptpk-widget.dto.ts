import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIptpkDto } from './new_bpt.onl_iptpk.dto';

export class NewBptOnlIptpkWidgetDto extends NewBptOnlIptpkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
