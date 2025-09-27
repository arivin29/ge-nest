import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIpsmpswtDto } from './new_bpt.onl_ipsmpswt.dto';

export class NewBptOnlIpsmpswtWidgetDto extends NewBptOnlIpsmpswtDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
