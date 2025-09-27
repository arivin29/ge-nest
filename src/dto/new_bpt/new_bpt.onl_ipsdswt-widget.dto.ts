import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIpsdswtDto } from './new_bpt.onl_ipsdswt.dto';

export class NewBptOnlIpsdswtWidgetDto extends NewBptOnlIpsdswtDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
