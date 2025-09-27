import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIpsmpswastaDto } from './new_bpt.onl_ipsmpswasta.dto';

export class NewBptOnlIpsmpswastaWidgetDto extends NewBptOnlIpsmpswastaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
