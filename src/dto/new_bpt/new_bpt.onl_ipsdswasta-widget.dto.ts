import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIpsdswastaDto } from './new_bpt.onl_ipsdswasta.dto';

export class NewBptOnlIpsdswastaWidgetDto extends NewBptOnlIpsdswastaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
