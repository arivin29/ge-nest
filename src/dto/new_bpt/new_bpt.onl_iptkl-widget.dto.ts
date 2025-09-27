import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIptklDto } from './new_bpt.onl_iptkl.dto';

export class NewBptOnlIptklWidgetDto extends NewBptOnlIptklDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
